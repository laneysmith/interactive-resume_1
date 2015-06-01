// Bio & Information

var bio = {
  "name": "Laney Smith",
  "role": "Wanna-be web developer",
  "contacts": {
    "mobile": "123-456-7890",
    "email": "lsmith.unc@gmail.com",
    "github": "laneysmith",
    "location": "Denver, CO, US"
  },
  "welcomeMsg": "Hi, this is my welcome message.",
  "languages": ["HTML", "CSS", "JavaScript"],
  "skills": ["HTML", "CSS", "JavaScript", "Adobe Photoshop", "Jasc Paint Shop Pro"],
  "picURL": "images/me.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.picURL);

    $("#header").append(formattedBioPic).append(formattedHTMLwelcomeMsg);
    $("#topContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).append(formattedHTMLlocation);
    $("#footerContacts").append(formattedHTMLemail).append(formattedHTMLmobile).append(formattedHTMLgithub).append(formattedHTMLlocation);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};
bio.display();

// Education

var education = {
  "schools": [
     {
        "name": "University of North Carolina at Chapel Hill",
        "location": "Chapel Hill, NC, US",
        "degree": "BA",
        "major": ["Public Policy", "Geography"],
        "dates": "2009-2013",
        "url": "http://www.unc.edu"
      }
    ],
  "onlineCourses": [
      {
        "title": "Javascript Syntax",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://udacity.com"
      },
      {
        "title": "HTML Basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://udacity.com"
      }
    ],
    "display": function() {
      for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolandcity = formattedschoolName + formattedschoolLocation;
        $(".education-entry:last").append(formattedschoolandcity);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formatteddegreemajor = formattedschoolDegree + formattedschoolMajor;
        $(".education-entry:last").append(formatteddegreemajor);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").prepend(formattedschoolDates);
      }

        if(education.onlineCourses.length >0) {
          $("#education").append(HTMLonlineClasses);
          for(course in education.onlineCourses) {
            $("#education").append(HTMLonlineStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".online-entry:last").prepend(formattedOnlineDates);
          }
        }
    }
};
education.display();

// Work History

var work = {
  "jobs": [
    {
      "position" : "Client Loyalty Data Analyst (Global Management Development Program)",
      "employer" : "Avaya",
      "dates" : "Jan 2015 - Present",
      "location" : "Highlands Ranch, CO",
      "desc" : ["Avaya description"],
      "url" : "http://www.avaya.com"
    },
    {
      "position" : "Healthcare Operations Analyst",
      "employer" : "Huron Consulting Group",
      "dates" : "Aug 2013 - Jan 2015",
      "location" : "Chicago, IL",
      "desc" : ["Designed and performed analyses that informed strategic initiatives focused on increasing provider productivity, clinic staff right-sizing, optimizing patient flow, site consolidations, and improving patient access for a 700+ provider hospital- owned medical group", "Created custom dashboards to track actionable metrics and financial impact", "Created the current standard internal tool that benchmarks provider patient contact hours and calculates revenue lost to unfulfilled contract hours", "Presented findings to client leaders in biweekly workgroup meetings"],
      "url" : "http://www.huronconsultinggroup.com"
    }
  ],
  "display": function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
      var formattedWorkEmployerTitle = formattedEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedWorkEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").prepend(formattedDates);

      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);

      if (work.jobs[job].desc.length > 0) {
        for (desc in work.jobs[job].desc) {
          var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].desc[desc]);
          $(".work-entry:last").append(formattedDesc);
        }
      }
    }
  }
};
work.display();

// Projects

var projects = {
  "projects": [
    {
      "title": "Valentine's Day Pizza",
      "dates": "February 14, 2015",
      "description": "One love, one pizza.",
      "images": ["images/pizzabefore.jpg", "images/pizzaafter.jpg"]
    },
    {
      "title": "My Favorite Pizza",
      "dates": "2014",
      "description": "This is my favorite pizza: white pizza with avocado, spinach, & mozzerella. Photo & recipe from thekitchn.com.",
      "images": ["images/favoritepizza.jpg"]
    }
  ],
  "display": function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").prepend(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};
projects.display();

// Internationalize Name Button

function inName() {
    var name = $("#name").html();
    var spc = name.indexOf(" ");
    name = name[0].toUpperCase() + name.slice(1, spc).toLowerCase() + name.slice(spc).toUpperCase();
    return name;
}

$('#main').append(internationalizeButton);

// Logs clicks

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Map of Places

$("#mapDiv").append(googleMap);
