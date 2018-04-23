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

        $('.btn').on('input', function(searchData){
            var searchString = $('.search-bar').val();
            var urlEncodedSearchString = encodeURIComponent(searchString);

            $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(){
            });
        });
    });
});

	// $('.transactions').html(renderTransactions(fullTransactionData));
	
	// $('.search-input').on('input', function(e) {
	// 	debugger;
	// 	var searchString = e.target.value.toLowerCase();
	// 	var filteredData = _.filter(fullTransactionData, function(transaction){
	// 		var foundInName    = transaction.name.toLowerCase().indexOf(searchString) > -1;
	// 		var foundInFor     = transaction.for.toLowerCase().indexOf(searchString) > -1;
	// 		var foundInDate    = transaction.date.toLowerCase().indexOf(searchString) > -1;
	// 		var foundInAmount  = transaction.amount.toLowerCase().indexOf(searchString) > -1;
	// 		return foundInName || foundInFor || foundInDate || foundInAmount;
	// 	});

	// 	$('.transactions').html(renderTransactions(filteredData));
	// });

