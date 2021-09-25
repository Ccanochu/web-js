jQuery(function(){
    console.log("Jquery is Run!!")

    if(window.location.href.indexOf("index")>-1){
        console.log("entro index")
        $('.slider').bxSlider();

        const publicaciones = [
            {
                title: "Titulo para catálogo 1",
                date: "Publicado el dia " +moment().format("dddd")+" "+moment().format("Do")+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae?"
            },
            {
                title: "Titulo para catálogo 2",
                date: "Publicado el dia " +moment().format("dddd")+" "+moment().format("Do")+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae?"
            },
            {
                title: "Titulo para catálogo 3",
                date: "Publicado el dia " +moment().format("dddd")+" "+moment().format("Do")+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae?"
            },
            {
                title: "Titulo para catálogo 4",
                date: "Publicado el dia " +moment().format("dddd")+" "+moment().format("Do")+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae?"
            },
            {
                title: "Titulo para catálogo 5",
                date: "Publicado el dia " +moment().format("dddd")+" "+moment().format("Do")+" de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eligendi dolores at vero ad sapiente omnis, repellat esse saepe autem laboriosam vitae sunt dolorum minus commodi cum dolore, provident repudiandae?"
            },
        ]
    
        publicaciones.forEach(publicacion=>{
            var post = `<article>
                            <h2>${publicacion.title}</h2>
                            <span>${publicacion.date}</span>
                            <p>${publicacion.content}</p>
                            <button type="button" class="btn btn-primary">LEER MÁS</button>            
                        </article>
                        <hr>`
            $("#posts").append(post)
        })
    }
    
    /* Customizar tema */
    var theme = $("#selector-theme")
    $("#change-to-dark").click(function(){

        theme.attr("href","css/dark.css")
        $(this).attr("display","none")
        $("#change-to-light").removeAttr("display")
        localStorage.setItem("dark","css/dark.css")
        $("input").addClass("bg-dark text-white")
        $("#select-sex").addClass("bg-dark text-white")

    })
    $("#change-to-light").click(function(){
        theme.attr("href","css/light.css")
        $(this).attr("display","none")
        $("#change-to-dark").removeAttr("display")
        $("input").removeClass("bg-dark text-white")
        $("#select-sex").removeClass("bg-dark text-white")
        localStorage.clear()
    })
    if(localStorage.getItem("dark") === "css/dark.css"){
        theme.attr("href",localStorage.getItem("dark"))
        $("#change-to-dark").attr("display","none")
        $("#change-to-light").removeAttr("display")
        $("input").addClass("bg-dark text-white")
        $("#select-sex").addClass("bg-dark text-white")
    }
    
    /* Autentificar */
    $("#form-submit").click(function(e){
        e.preventDefault();
        var form_name = $("input[id='form_name']").val()

        localStorage.setItem("form_name", form_name)

        location.reload()
    })

    var return_name = localStorage.getItem("form_name")

    if(return_name!=null && return_name != "undefined"){
        form_control = $("#sidebar p")
        form_control.html("<br><strong>Hola "+return_name +"</strong>")
        form_control.append("<a href='index.html' id='logout'>Logout</a>")
        $("#form-control").hide()
        $("#logout").click(function(e){
            e.preventDefault()
            localStorage.clear()
            location.reload()
        })
    }
    if(window.location.href.indexOf("about")>-1){
        $("#about").accordion()
    }

    if(window.location.href.indexOf("reloj")>-1){

        setInterval(function(){
            $("#reloj").html(moment().format("hh:mm:ss")).css("fontSize","40px")
        },1000)
    }
    
    if(window.location.href.indexOf("contacto") >-1){
        // $("form input[id='contact-date']").datepicker({
        //     dateFormat: "dd-mm-yy"
        // })
        $("#contact-date").datepicker({
            dateFormat: "dd-mm-yy"
          });
        $.validate({
            lang:"es"
        })
    }
})


