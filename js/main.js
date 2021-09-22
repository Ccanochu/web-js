jQuery(function(){
    console.log("Jquery is Run!!")
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
    //cargando tema
    var theme = $("#selector-theme")
    $("#change-to-dark").click(function(){


        theme.attr("href","css/dark.css")
        $(this).attr("display","none")
        $("#change-to-light").removeAttr("display")

        localStorage.setItem("change-to-dark", "css/dark.css")

        var dark_store = localStorage.getItem("change-to-dark")

        if (dark_store !="undefined" && dark_store!=null) {
            
        }

    })
    $("#change-to-light").click(function(){
        theme.attr("href","css/light.css")
        $(this).attr("display","none")
        $("#change-to-dark").removeAttr("display")
    })

    $("#form-submit").click(function(e){
        e.preventDefault();
        console.log("entro")
        var form_name = $("input[id='form_name']").val()
        console.log(form_name)

        localStorage.setItem("form_name", form_name)

        location.reload()
    })

    var return_name = localStorage.getItem("form_name")

    if(return_name!=null && return_name != "undefined"){
        form_control = $("#sidebar p")
        form_control.html("<br><strong>Hola "+return_name +"</strong>")
        form_control.append("<a href='#' id='logout'>Logout</a>")
        $("#form-control").hide()
        $("#logout").click(function(){
            localStorage.clear()
            location.reload()
        })

    }
    

    
})


