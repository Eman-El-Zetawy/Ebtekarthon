const  partner =  document.getElementById("idpartner"),
       contact  =  document.getElementById("idcontact") ,
       speaker= document.getElementById('idspeaker'),
       jurie = document.getElementById("idjurie") ,
       home = document.getElementById('idhome') ,
       about = document.getElementById('idabout') ,
       venue = document.getElementById('idvenue') ,
       SocialMedia = document.getElementById('idSocialMedia') ,
       backgroundHome= document.getElementById('background') ,
       logo = document.getElementById('idlogo'),
       schedule =document.getElementById('idSchedule')
       ;

   const my = new Headers();


my.append('Content-Type', 'application/json');


/////////////// fetch 
        fetch('http://localhost:3000/contact',{
                method:'GET', 
                headers : my }) .then( res => res.json())  .then((data) => { 
                    console.log(data) ; 
                    rendercontact(data); 
                });

        fetch('http://localhost:3000/partners',{
                method:'GET', 
                headers : my }) .then( res => res.json()) .then((data) => { 
                    console.log(data) ; 
                    renderpartner (data); 
                }); 


        fetch('http://localhost:3000/speaker',{
                meathod:'GET', 
                headers : my}).then( response=>response.json()).then(data=> {
                    console.log(data) ; 
                    RenderingSpeaker(data); 
              });

        fetch('http://localhost:3000/juries', {
                meathod: 'GET',
                headers: my }).then(response => response.json()).then(data => {
                        console.log(data);
                            RenderingJuries(data);
                });

        fetch('http://localhost:3000/home', {
                    method: 'GET',
                    headers: my }).then(response => response.json()).then((data) => {
                    console.log(data[0]);
                    console.log(data);
                    renderingHome(data[0]);
            });
          fetch('http://localhost:3000/about', {
                    method: 'GET',
                    headers: my
                }).then(response => response.json()).then((data) => {
                console.log(data[0]);
                    renderingAbout(data[0]);
                });

          fetch('http://localhost:3000/socialMedia',{
                method:'GET', 
                headers : my }) 
                .then( res => res.json())  .then((data) => { 
                    console.log(data) ; 
                    renderingSocialMeedia(data); 
                });

 
         fetch('http://localhost:3000/event', {
            method: 'GET',
            headers: my
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            renderingLogo(data[0]);
         });
/////////venue
         fetch('http://localhost:3000/contINF', {
            method: 'GET',
            headers: my
        }).then(response => response.json())
        .then((data) => {
            console.log(data);
            renderingVenue(data[0]);
         });

         fetch('http://localhost:3000/day', {
            method: 'GET',
            headers: my
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            renderSchedule(data);
         });

    
/////////////Function Randering 
                function rendercontact(arr){
                            let html ="";
                            arr.forEach(a=> { 
                                console.log(a.img);
                        html+='<div class="col-lg-4 col-md-6">'+
                        '<div class="contact-post"  >'+
                        '<img src="http://localhost:3000'+a.img + ' " alt="">' +
                        '<div class="contact-post-content">'+
                        '<h2>'+ a.name + '</h2><span>'+a.position+'</span><p>'+a.mobile+
                        '<br>'+a.email+'</p></div></div></div>';
                    });
                                contact.innerHTML = html;
                            }

// 
            function renderpartner(arr){ 
                let html="";
                
                arr.forEach(a=> {
                html +='<li><a href="'+a.wsite + '" id="'+a.id+'"><img src="http://localhost:3000'+a.img+'" alt=""></a></li>'; 
                    }); 
                    partner.innerHTML = html  ; 
                    }

  
            function RenderingSpeaker(arr){
            let html = "";
                arr.forEach((data ,i) => {
                    if(i==0){ html +='<div class="row"> '  }
                    html  += `<div class="col-lg-3 col-md-4 col-sm-6">`+
                `<div idSpeaker="`+data.id+`" class="speaker-post">`+
                    `<img src="http://localhost:3000`+data.img+`"  onclick="openSpeaker(event.target)"></a>`+
                    `<div class="speaker-content">`+
                        `<h2  onclick="openSpeaker(event.target)">`+data.name+`</h2>`+
                        `<span>`+data.position+`</span>`+
                    `</div></div></div>`;
                    
                    if((i+1)%4==0){ html += '</div><div class="row"> '; } ;
                });

            speaker.innerHTML = html;
            }
            function RenderingJuries(arr) {
               let html = "";
               arr.forEach((data,i) => {
                if(i==0){ html +='<div class="row"> '  }
                   html += `<div class="col-lg-3 col-md-4 col-sm-6">`+
                `<div idJuries="`+data.id+`" class="speaker-post">`+
                    `<img src="http://localhost:3000`+data.img+`"  onclick="openJuries(event.target)">`+
                    `<div class="speaker-content">`+
                    `<h2 onclick="openJuries(event.target)">`+data.name+`</h2>`+
                        `<span>`+data.position+`</span>`+
                    `</div></div></div>`;
                    if((i+1)%4==0){ html += '</div><div class="row"> '; } ;
               });
            jurie.innerHTML = html ;

            };

            function renderingHome(data){
                console.log(data); 
                let html ="";

                html = '<div class="col-lg-9 col-md-8"><h1>EBTEKARTHON <br>'+
                        data.hometitle +
                        '</h1></div><div class="col-lg-3 col-md-4"><div class="event-date"><p>'+
                        data.homelocation +
                        '<span></span>'+data.homedate +
                        '</p></div></div>' ; 

   backgroundHome.style = 'background: #111 url("http://localhost:3000'+data.homeimg+'") center center no-repeat;' ;
           
            
            
		home.innerHTML = html ;
            } 

           function renderingAbout(data){
                console.log(data);
                let html ="";
                html = '<div class="title-section"><h1>About Ebtekarthon</h1></div><p>'+
                data.aboutdescr + 
                '</p><div class="video-box"><iframe class="videoembed" src="https://www.youtube.com/embed/'+data.aboutvidoe+'"></iframe></div> ';
//
         about.innerHTML = html ; 
            }                
          function renderingSocialMeedia(data){
              console.log(data);
          let html = "";
          data.forEach(a=>{
               html += '<a href = "'+a.wsite + '" class = "a"><img src = "./gallery/'+a.img + '" alt="website" class="logos" ></a>';
          });
          SocialMedia.innerHTML = html ;

            }

        function renderingLogo(data) {
            console.log(data);
                let html = "";
                html = '<a class="navbar-brand" href="./Ebtekarthon.html">'+
                '<img src="http://localhost:3000'+data.headerlogo+'" alt=""></a>' ; 
                logo.innerHTML = html;

            }
 
            function renderingVenue(data){
                console.log(data);
              let html ="";
              html = '<p ><img src="gallery/location.png" style="width: 40px;">'+
              data.location+
              '</p><p><img src="gallery/telephone_blue.png" style="width: 40px;"></img>'+
              data.numphone +
              '</p></i><p><img src="gallery/email (1).png" style="width: 40px;">'+
              data.email+
              '	</p> ';
              venue.innerHTML =html ;
				
            }

            function renderSchedule(arr){
                let day = "" ;;
    let z=0;
          arr.forEach((obj,i)=>{
              if(obj.event_id !==null){

                  if(z !==obj.id){
                      if(z !==0){
                          day +='</ul></div></div>';
                      }
                    day +='<div class="col-lg-4"><div class="schedule-block"><h2>'+
                    obj.day_date +'</h2><ul class="schedule-list">';
                    z = obj.id ;
                  }
                  if(obj.title=="Break!"){
                        day += '<li class="time-off-item"><span class="time">'+
                        obj.time+
                        '</span><img src="gallery/green.jpeg"  style="width: 40px;"><span class="time-off">'+
                        obj.title +
                        '</span></li>' ;
                        }
                 
                        else if (obj.title=="Lunch Break!"){
                            day +='<li class="time-off-item"><span class="time">'+
                            obj.time+
                            '</span><img src="gallery/green.jpeg"  style="width: 40px;"><span class="time-off">'+
                            obj.title+
                            '</span></li>';
                        }
                        else{
                            day +='<li><span class="time">'+
                        obj.time +
                        '</span><img src="./gallery/m1.jpg" alt=""><div class="schedule-cont"><p>'+
                        obj.title +
                        '</p><p class="schedule-auth"><span></span></p></div></li>' ;  
                        }
              }
          })
          day +='</ul></div></div>'; 
          schedule.innerHTML=day ;
            }


            function openSpeaker(trg){
                console.log(trg);
                let id=trg.parentElement.getAttribute("idSpeaker");
                console.log(id);
                window.location = "../User_Ebtekarthon/profile/profile.html?id="+id+'&name=speaker';
              }

      function openJuries(trg){
          console.log(trg);
          let id=trg.parentElement.getAttribute("idJuries");
          console.log(id);
          window.location = "../User_Ebtekarthon/profile/profile.html?id="+id+'&name=juries';
        

      }