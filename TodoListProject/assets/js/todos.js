addElement();
doneElement();
removeElement();
toggleInput();

// Click on + to fadeIn() or fadeOut() the input area
function toggleInput() {
    $(".fa-plus").on("click", function () {
        $("input[type='text']").fadeToggle();
    });
}

// Click on X to delete Todo (changed $("li") to $("ul") because it will only work on existing elements when the page is loaded - and added "span" to on() function )
function removeElement() {
    $("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
    })
}
// Check off specific todos by clicking
function doneElement() {
    $("ul").on("click", "li", function() {
        $(this).toggleClass("done");
    });
}

// Add new Todo to the list
function addElement() {
    $("input[type='text']").keypress(function (e) { 
        if(e.which === 13) {
            //grabbing new todo text from input
            var todoText = $(this).val();
            //create a new li and add to ul
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
            //clearing input text area
            todoText = $(this).val("");
        }
    });
}