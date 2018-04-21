$(function(){
    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(currentStudents){;
        //console.table(currentStudents[0]);
        currentStudents.sort(function(a, b){return 0.5 - Math.random()});
        
        function renderStudents(studentArray){
            var studentProfile = "";

            studentArray.forEach(function(currentStudent){
                studentProfile += '<div class="student card border-primary">';
                studentProfile += '<div class="card-body">'
                studentProfile += '<p class="firstName">'+ currentStudent.firstName  +'</p>'
                studentProfile += '<p class="fullName">'+ currentStudent.fullName  +'</p>'
                studentProfile += '<p class="id">'+ currentStudent.id  +'</p>'
                studentProfile += '<p class="porfolioUrl">'+ currentStudent.portfolioUrl  +'</p>'
                studentProfile += '<p class="githubUrl">'+ currentStudent.githubUrl  +'</p>'
                studentProfile += '<p class="linkedinUrl">'+ currentStudent.linkedinUrl  +'</p>'
                studentProfile += '<p class="fullBio">'+ currentStudent.fullBio +'</p>'
                studentProfile += '<p class="missionStatement">'+ currentStudent.missionStatement +'</p>'
                studentProfile += '<p class="email">'+ currentStudent.email  +'</p>'

                currentStudent.showcase.forEach(function(show){ 
                    studentProfile += '<p class="showcase">'+ show.projectName +'</p>'
                    studentProfile += '<p class="showcase">'+ show.url +'</p>'
                    studentProfile += '<p class="showcase">'+ show.githubUrl +'</p>'
                    studentProfile += '<p class="showcase">'+ show.description +'</p>'
                    studentProfile += '<p class="showcase">'+ show.demoVideo +'</p>'
                });
                studentProfile += '</div>'
                studentProfile += '</div>';
            });
            return studentProfile;   
        };
        testHTML = renderStudents(currentStudents);
        $('.students-cont').html(testHTML);
    });
    //});
        
        

        //make html lines for each returned data piece 

        //showcase?


    

});


