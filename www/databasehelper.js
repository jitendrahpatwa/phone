	function init(){
	 document.addEventListener("deviceready", onDeviceReady, false);
	}
    function onDeviceReady() {
        document.addEventListener("backbutton",onBackKeyDown,false);
		/*$('#listview').on('click', 'li', function() {
        	alert("Works"); // id of clicked li by directly accessing DOMElement property
    	});*/
		//
    }
    function onBackKeyDown(){
    	popup();
    }
    function popup(){
        //navigator.app.exitApp();
		//window.Close();
		window.location.assign('index.html');
    }

function dbConnect(){
	init();
     var db = window.openDatabase("employeeDb","1.0","empDb",1000000); 
        db.transaction(populateDB, errorCB, successCB);
    }
  
    //create table and insert some record
    function populateDB(tx) {
        alert('All Employees Are Here');
    }
  
    //function will be called when an error occurred
    function errorCB(err) {
        alert("Error processing SQL: "+err.code+"\n"+err.message);
    }
  
    //function will be called when process succeed
    function successCB() {
        //alert("success!");
  var db1 = window.openDatabase("employeeDb","1.0","empDb",1000000); 
        db1.transaction(queryDB,errorCB);
    }
  
    //select all from MyFriends
    function queryDB(tx){
        tx.executeSql('SELECT * FROM employee',[],querySuccess,errorCB);
    }
//  var row;
    function querySuccess(tx,result){
		$('#MyFriendsList').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#MyFriendsList').append('<li><a href="employee.html"><h3 class="ui-li-heading">'+row['name']+'</h3><div class="ui-li-desc">Designation '+row['des']+' & basewages @'+row['wages']+'rupees'+'</div></a></li>');
        });
  
        $('#MyFriendsList').listview();
//$('#MyFriendsList').click(){alert('hi');};
/*       $('#MyFriendsList').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            $('#MyFriendsList').append('<li><a href="#"><h3 class="ui-li-heading">'+row['name']+'</h3><div class="ui-li-desc">Designation: '+row['des']+' & wages @'+row['wages']+'</div></a></li>');
        });
  
        $('#MyFriendsList').listview();*/
    }

    //http://www.mindfiresolutions.com/Converting-speech-to-text-in-Android-using-PhoneGap-2380.php