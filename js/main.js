$(document).ready(() => {

///////////   Fetching Instagram API   ///////////

  const link = 'https://api.github.com/users/flukal/repos';
  
  $.ajax({
    url: link,
    success: (result) => {
      const profile = result;
      for ( i = 0 ; i < 6 ; i++) {
        //console.log(profile[i]);
        const title = profile[i].name;
        const repository = profile[i].svn_url;
        const homepage = profile[i].homepage;
        const repo_box = `<div class="repoBox">
                            <h3>${title}</h3>
                            <div class="btnBox">
                              <a id="repoBtn" href="${repository}" target="_blank">Github Repo</a>
                              <a id="homeBtn" href="${homepage}" target="_blank">Github Homepage</a>
                            </div>
                          </div>`;
        $('.portfolioBox').append(repo_box);
      }
    }
  })  

///////////   Menu Top on Scrolling   ///////////
  
  const targetOffset = $(".menuBox").offset().top;

  const $w = $(window).scroll(function () {
    if ($w.scrollTop() >= targetOffset) {
      $('.menuBox').addClass("fixedMenu")
    } else {
      $('.menuBox').removeClass("fixedMenu")
    }
  });

///////////   Smooth Scrolling to section   ///////////

  let scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

///////////   Active Link in Menu   ///////////

  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 20;
      
      if (sectionOffset <= scrollbarLocation) {
        $(this).children().addClass('active');
        $(this).children().removeClass('active');
      }
    })
  })

///////////   Skills List   ///////////

  const skillsList = [  
                      {name : "Html5", width: "95%" }, 
                      {name : "Css3", width: "98%" }, 
                      {name : "Javascript", width: "65%" }, 
                      {name : "Git", width: "73%" }, 
                      {name : "JQuery", width: "72%"}, 
                      {name : "NodeJS", width: "36%"}, 
                      {name : "React", width: "67%"},
                      {name : "Bootstrap", width: "93%"}, 
                      {name : "Wordpress", width: "55%"}
                      ];

    for( let i = 0 ; i < skillsList.length ; i++){
    const nameSkills = skillsList[i].name;
    const widthSkills = skillsList[i].width; 
    const itemBox = `
    <div class="itemBox">
      <h3>${nameSkills}</h3>
      <div>
        <div style="width: ${widthSkills}; background-color: #EFF2F4">${widthSkills}</div>
      </div>
    </div>`
    
    $('.skillsBox').append(itemBox);
  }


});