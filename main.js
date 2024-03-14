
//adding components to the main HTML

$(
    function(){
        const includes=$("[data-includes]")
        $.each(includes,function(){
            const file=$(this).data('includes')+'.html';
            $(this).load(file);
        })
    }
)
