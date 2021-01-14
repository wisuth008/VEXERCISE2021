form

<!DOCTYPE html>
<html>
 <head>
   <base target="_blank">
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>แบบฟอร์มส่งผลการออกกำลังกาย</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
   <style>
     .disclaimer{width: 480px; color:#646464;margin:20px auto;padding:0 16px;text-align:center;font:400 12px Roboto,Helvetica,Arial,sans-serif}.disclaimer a{color:#009688}#credit{display:none}
   </style>
 </head>
 <body>
<div class = "container-fluid">
   <form class="main" id="form" novalidate="novalidate" style="max-width: 480px;margin: 40px auto;">
         <img src="https://drive.google.com/uc?id=1sb1ujsTF9zS-WNZnYUDCnprQ3D5Fx-1F" width="100%" class="img-fluid" alt="Responsive image">
         <img src="https://drive.google.com/uc?id=1TKGK6xNg8C11zc05dbmq-HQJvqk-eK0v" width="100%" class="img-fluid" alt="Responsive image">          
                     <div id="forminner">     
                           <div class="alert alert-success"  role="alert">
                           <div class="form-row">
                                 <div class="form-group col-md-24">
                                    <label for="ebib"><B><center><font size=8 color=#006600>EBIB**</font></center></B></label>
                                     <input type="text area" class="form-control" id="ebib" name="ebib" maxlength="5"placeholder="อีบิ๊บต้องใส่สำคัญมาก">
                                 </div>
                           </div>
                           <div class="input-field col s6">
                                   <select id="type" >
                                      <option disabled selected>ประเภทการออกกำลังกาย(ช่องนี้ต้องเลือก)**</option>
                                      <option>เดิน</option>
                                      <option>วิ่งทางเรียบ</option>
                                      <option>วิ่งเทรล</option>
                                      <option>วิ่งบนลู่วิ่งไฟฟ้า</option>
                                      <option>กระโดดเชือก</option>
                                      <option>กอล์ฟ</option>
                                      <option>เตะฟุตบอล</option>
                                      <option>บาสเกตบอล</option>
                                      <option>จักรยานทางเรียบ</option>
                                      <option>จักรยานเสือภูเขา</option>
                                      <option>จักรยานอยู่กับที่</option>
                                      <option>การเต้นแอโรบิค</option>
                                      <option>การยกน้ำหนัก</option>
                                      <option>การว่ายน้ำสระ</option>
                                      <option>การว่ายน้ำ OPenWater</option>
                                      <option>การปั่นวีลแชร์</option>
                                      <option>ชกมวย</option>
                                      <option>โยคะ</option>
                                      <option>ฟันดาบ</option>
                                      <option>เพาะกาย</option>
                                      <option>พิลาทิส</option>
                                      <option>เต้นซุมบ้า</option>
                                      <option>HIIT</option>
                                      <option>พายเรือ</option>
                                      <option>ปีนเขา</option>
                                      <option>งานบ้าน</option>
                                      <option>ทำสวน</option>
                                      <option>นับก้าว</option>
                                       <option>วิดพื้น</option>
                                      <option>ซิทอัพ</option>
                                      <option>ดึงข้อ</option>
                                      <option>อื่น ๆ</option>
                                      
                                      </select>
                           </div> 
                           <div class="form-group col-md-12"><center>
                                <label for="other"><B><font size=4 color=blue>อธิบายเพิ่มเติมเกี่ยวกับการออกกำลังกาย</B></label>
                                <input type="text area" class="form-control" id="other" name="other" maxlength="500" placeholder="วันเวลาสถานที่ หรือชื่องานวิ่งช่องนี้เว้นได้ใส่หรือไม่ใส่ก็ได้">
                           </div> 
                            <div class="form-group col-md-12"><center>
                                <label for="distace"><center><B><font size=4 color=blue>ผลการวิ่งระยะทางหรือจำนวนก้าวหรือจำนวนครั้ง** </B></center></label>
                                <B><font size=3 color=red>(ใส่แต่ตัวเลขครับ ไม่ต้องใส่หน่วย ครั้ง กม. Km K )</font></B>
                                <input type="integer" class="form-control" id="distance" name="distance" maxlength="10" placeholder="ระยะทางเป็นกิโลเมตร จำนวนก้าว จำนวนครั้ง ถ้าไม่มีใส่ 0">
                                
                             
                            
                            
                            
                               <div class="form-group col-md-12"><center>
                                <label for="duration"><B><center><font size=4 color=blue>เวลาที่ออกกำลังกายเป็นนาที**</font></B></center></label>
                                <Br> <B><font size=3 color=red>(ใส่แต่ตัวเลขครับ ไม่ต้องใส่หน่วย นาที) </font></B>
                                <input type="integer" class="form-control" id="duration" name="duration" maxlength="10" placeholder="เวลาเป็นนาที ใส่แต่ตัวเลข ถ้าเป็นชั่วโมงให้แปลงเป็นนาทีก่อน">
                               
                              
                               </div>
                              
                                <div class="form-group col-md-12"><center>
                                <label for="calory"><center><B><font size=4 color=blue>การเผาผลาญแคลอรี**่</font></B></center></label>
                               <Br> <B><font size=3 color=red>(ใส่แต่ตัวเลข ไม่ต้องใส่หน่วย แคลอรี่ ) </font></B>
                                <input type="integer" class="form-control" id="calory" name="calory" maxlength="10" placeholder="่แคลอรี่ ใส่แต่ตัวเลขไม่ต้องมีหน่วย ต้องใส่โดยประมาณ">
                              
                            
                             </div>
<!--อัปโหลดรูภาพ--> 
       <div class="row">
         <div class="file-field col s12"><center>
            <div class="btn">
             <span>เลือกรูปภาพแอพออกกำลังกาย ระบุวันเวลา และสถิติ</span>
             <input id="files" type="file">
            </div>
            <div class="file-path-wrapper">
             <input class="file-path validate" type="text" placeholder="เมื่อเลือกได้ชื่อไฟล์จะแสดงที่นี่">
            </div>
         </div>
       </div>
      
       <div class="row">
         <div class="input-field col s6"><center>
           <button class="waves-effect waves-light btn submit-btn" id="button" type="submit" onclick="submitForm(); return false;"><font size=4>บันทึกส่งผลการออกกำลังกาย</font><i class="material-icons right">send</i></button>
         </div>
       <br>....
       <div class="input-field col s12" id = "progress">
      
      <div class="form-row">
           <img id="image"width="400" />
      </div>
       </div>
       </div>
      </div>
       </div>
       </div>
       </div>
     </form>   
     
     <div id="success" style="display:none">
       <h2 class="left-align teal-text"><center>การส่งผลออกกำลังกายของท่านสำเร็จแล้ว!</center></h2>
       <p><font size=6><center>ขอให้ท่านออกกำลังกายเพื่อสุขภาพอย่างมีความสุขและสุขภาพแข็งแรงครับ</center></font></p>
       <div class="alert alert-danger"  role="alert"><center>
      <a href="https://script.google.com/macros/s/AKfycbwEeanSzX84iF9FExKqdSBAE4WzgtrXcYwQkACPRt0Q7mf9S15Q/exec"><font size=6> ส่งผลการออกกำลังกายเพิ่มเติม </font></a>
       <Br> <a href="https://script.google.com/macros/s/AKfycbxECtnlqbnN6J6ZFaNgIkve26suC1zP9pnu77jRDfyoUgGcpsE/exec"><font size=6>ดูผลการออกกำลังกาย</font></a>
      
      
      </center></div>   
             
            
    


   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
   <script>
   //document.getElementById("submit").disabled = true
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });
  
     var file, reader = new FileReader();
     reader.onloadend = function(e) {
       if (e.target.error != null) {
         showError("File " + file.name + " could not be read.");
         return;
       } else {
         google.script.run
           .withSuccessHandler(showSuccess)
           .uploadFileToGoogleDrive(e.target.result, file.name, 
                  $('input#ebib').val(),
                  $('#type').val(),
                  $('input#other').val(), 
                  $('input#distance').val(),
                  $('input#duration').val(),
                  $('input#calory').val()
                  
                  );
       }
     };

       function showSuccess(e) {
       if (e === "OK") {
       $('#forminner').hide();
        $('#success').show();
        $('#image').hide();
         $('#progress').hide();
         
         

        } else {
         showError(e);
       }
     }

     function restartForm() {
     $('#form').trigger("reset");
         $('#forminner').show();
         $('#success').hide();
         $('#progress').html("");
         $('#button').show();

       }
     
     function submitForm() {
     event.preventDefault();
     var ebib =$('input#ebib').val();
     if (ebib.length === 0) {
     showError("กรุณากรอกอีบิ๊บของท่านด้วย");
     return;
     }
      var type =$('#type').val();
     if (type.length === 0) {
     showError("กรุณาเลือกประเภทการออกกำลังกายด้วยครับ");
     return;
     }   
     
     var distance =$('input#distance').val();
     if (distance.length === 0) {
     showError("กรุณาใส่ระยะทางหรือจำนวนก้าวหรือถ้าไม่มีใส่ 0");
     return;
     }
     var duration =$('input#duration').val();
     if (duration.length === 0) {
     showError("กรุณากรอกเวลาออกกำลังกายเป็นนาที");
     return;
     }
     var calory =$('input#calory').val();
     if (calory.length === 0) {
     showError("กรุณาแคลอรี่โดยประมาณถ้าไม่มีในแอพ");
     return;
     }
   
       var files = $('#files')[0].files;
       if (files.length === 0) {
         showError("ท่านต้องส่งไฟล์ภาพแอพบอกระยะทางด้วยครับ คลิกเลือกรูปภาพด้านบนให้ขึ้นชื่อไฟล์ แล้วกดส่งระยะอีกครั้งครับ");
         return;
       }
      document.getElementById("button").style.display = "none"
       file = files[0];
       if (file.size > 1024 * 1024 * 20) {
         showError("The file size should be < 20 MB. ");
         return;
       }
       showMessage("...กำลังส่งผลการออกกำลังกายของท่าน...");
       reader.readAsDataURL(file);
     }
       

     function showError(e) {
       $('#progress').addClass('red-text').html(e);
     }

     function showMessage(e) {
       $('#progress').removeClass('red-text').html(e);
     }
       $(document).ready(function() {
       $('select').material_select();
     });
   
   document.getElementById("files").onchange = function () {
    var reader = new FileReader();
    reader.onload = function (e) {
    document.getElementById("image").src = e.target.result;
     $('#image').show();
    };
    reader.readAsDataURL(this.files[0]);
    };
  // document.getElementById("waves-effect waves-light btn submit-btn").style.display = "none"
   
   </script>

 </body>

</html>

                 
                 cod.gs
var SCRIPT_PROP = PropertiesService.getScriptProperties();
function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();

    SCRIPT_PROP.setProperty("1myI-ou7uptR_PIZc_csNPsSSbiLat6MT_yQsl56bWsI", doc.getId());
}
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html').setTitle("แบบฟอร์มส่งผลการออกกำลังกาย");
}

function uploadFileToGoogleDrive(data, file,ebib,type,other,distance,duration,calory) {

  try {
   
    var folder=DriveApp.getFolderById('1QXbdQInMHdDxBGlzepJnXYdMl3x9XTy7');
   
    var contentType = data.substring(5,data.indexOf(';')),
        bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
        blob = Utilities.newBlob(bytes, contentType, file),
       // file = folder.createFile(blob),
      file = folder.createFolder([ebib]).createFile(blob),
        filelink=file.getUrl(),
        filelid =file.getId() ;
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);    
   
    var doc = SpreadsheetApp.openById("1myI-ou7uptR_PIZc_csNPsSSbiLat6MT_yQsl56bWsI");
    var sheet = doc.getSheetByName("Total");

    var headRow =  1;
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; 
    var row = [];

     for (i in headers){
         if (headers[i] == "LASTSEND"){
        row.push("=COUNTIF(E"+(sheet.getLastRow()+1)+":E,E"+(sheet.getLastRow()+1)+")&E"+(sheet.getLastRow()+1)+"",);
      } else if (headers[i] == "ALL"){
        row.push("=COUNTIF(E"+(sheet.getLastRow()+1)+":E2,E"+(sheet.getLastRow()+1)+")&E"+(sheet.getLastRow()+1)+"",);
      
      } else if (headers[i] == "DATE"){ 
        row.push(new Date());
      } else  if (headers[i] == "TIME"){ 
        row.push(new Date());
      } else if (headers[i] == "EBIB"){ 
        row.push(ebib);
        } else if (headers[i] == "TYPE"){ 
        row.push(type);
      } else if (headers[i] == "OTHER"){ 
        row.push(other);   
        
      } else if (headers[i] == "DISTANCE"){
        row.push(distance);
     } else if (headers[i] == "DURATION"){
        row.push(duration);    
        
        
       } else if (headers[i] == "CALORIES"){
        row.push(calory);
         
        
        
      } else if (headers[i] == "PicURL"){
        row.push(filelink);
      } else if (headers[i] == "PicID"){
        row.push(filelid);
      }
       
    }

    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    return "OK";
   } catch (f) {
    return f.toString();
  } finally {
    lock.releaseLock();
  }

}

                 
