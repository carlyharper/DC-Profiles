$(function(){
    var studentCardArray = [];

    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(currentStudents){;
        //console.table(currentStudents[0]);
        studentCardArray = currentStudents.sort(function(a, b){return 0.5 - Math.random()});
        var studentHTML = renderStudents(studentCardArray);
        $('.students-cont').html(studentHTML);
    }); 

    function renderStudents(studentArray){
        var studentProfile = "";
        var fancyHTML = "";

        studentArray.forEach(function(currentStudent){
            studentProfile += '<div class="student card border-primary">';
            studentProfile += '<div class="card-body">'
            studentProfile += '<p class="fullName">'+ currentStudent.fullName  +'</p>'
            studentProfile += '<p class="missionStatement">'+ currentStudent.missionStatement +'</p>'
            studentProfile += '<p class="email">'+ currentStudent.email +'</p>'

            if(currentStudent.showcase > 0);{
                currentStudent.showcase.forEach(function(show){ 
                    studentProfile += '<p class="showcase">'+ show.projectName +'</p>'
                    studentProfile += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#'+ currentStudent.id +'">Learn more about '+ currentStudent.firstName +'</button>'
                    studentProfile += '</div>'
                    studentProfile += '</div>'
                });
            };

            fancyHTML += '<div class="modal fade id="'+ currentStudent.id +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
            fancyHTML += '<div class="modal-dialog modal-dialog-centered" role="document">'
            fancyHTML += '<div class="modal-content">'
            fancyHTML += '<div class="modal-header">'
            fancyHTML += '<h5 class="modal-title" id="'+ currentStudent.id +'">Modal title</h5>'
            fancyHTML += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
            fancyHTML += '<span aria-hidden="true">&times;</span>'
            fancyHTML += '</button>'
            fancyHTML += '</div>'
            fancyHTML += '<div class="modal-body">'
            fancyHTML += '<p>'+currentStudent.fullBio+ '</p>'
            fancyHTML += '</div>'
            fancyHTML += '<div class="modal-footer">'
            fancyHTML += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
            fancyHTML += '<button type="button" class="btn btn-primary">Save changes</button>'
            fancyHTML += '</div>'
            fancyHTML += '</div>'
            fancyHTML += '</div>'
            fancyHTML += '</div>'
        });
            $('.students-cont').append(studentProfile); 
            $('.modal-cont').append(fancyHTML); 
    };

    $('.search-button').on('click', function(e){
        e.preventDefault();
        var searchString = $('.search-bar').val();
        var filteredStudents = studentCardArray.filter(function(currentStudents){
            var foundInFirstName    = currentStudents.firstName.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
            var foundInFullName     = currentStudents.fullName.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
            var foundInFullBio   = currentStudents.fullBio.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
            return foundInFirstName || foundInFullName || foundInFullBio;
        });
        $('.students-cont').html(renderStudents(filteredStudents));
    });
}); 



