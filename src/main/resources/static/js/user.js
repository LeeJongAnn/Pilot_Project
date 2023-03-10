let index = {
    init : function(){
        $("#save-user").on("click",()=>{
            this.userSave();
        }),
        $(".btn-user-delete").on("click",()=>{
            e.preventDefault();
            attach = $(this);
            boardId = $(this).attr("boardId");
            $("#Title").text("주의!!");
            $("#Text").text("해당 하는 게시글 " + boardId +" (을)를 삭제하시겠습니까?");
            $("#Modal").modal("show");
            $("#okButton").attr("href",attach.attr("href"));
         });
        }
    },


    userSave : function(){
        let data = {
            username : $("#username").val(),
            password : $("#password").val(),
            role:  $("input[name='options']:checked").val()
        };
        console.log(data)
        var exp = /[a-z0-9]$/; //영문자와 숫자
        //정규표현식. test(입력값) 규칙에 맞으면 true
        if(!exp.test(data.username)){
            alert("영문자와 숫자만 입력가능합니다.");
            $("#username").focus();
            return;
        }
        $.ajax({
              type: "POST",
              url: `/users/save-user`,
              data:JSON.stringify(data),
              contentType:"application/json; charset=utf-8",
              dataType: "json"
          }).done(function(resp){
              alert("해당하는 유저 생성이 완료되었습니다.");
              location.href="/users/page-user/1";
          }).fail(function(error){
              alert(JSON.stringify(error));
          });
        },
}
index.init();
function userDelete(userId) {
        alert("테스트 :" + userId)
            $.ajax({
                type: "DELETE",
                url: `/users/delete-user/${userId}`,
            }).done(function(resp){
                alert("삭제가 완료되었습니다.");
//                location.href=`/users/page-user/1`;
                location.reload();
            }).fail(function(error){
                alert(JSON.stringify(error));
            });
    }

//        editSave : function(){
//                let data = {
//                    userId : $("#id").val(),
//                    username : $("#username").val(),
//                    password : $("#password").val(),
//                    role : $("input[name='options']:checked").val()
//                };
//                console.log(data)
//                var exp = /[a-z0-9]$/; //영문자와 숫자
//                //정규표현식. test(입력값) 규칙에 맞으면 true
//                if(!exp.test(data.username)){
//                    alert("영문자와 숫자만 입력가능합니다.");
//                    $("#username").focus();
//                    return;
//                }
//                $.ajax({
//                      type: "PUT",
//                      url: `/users/save-user/${data.userId}`,
//                      data:JSON.stringify(data),
//                      contentType:"application/json; charset=utf-8",
//                      dataType: "json"
//                  }).done(function(resp){
//                      alert("해당하는 유저 생성이 완료되었습니다.");
//                      location.href="/users/page-user/1";
//                  }).fail(function(error){
//                      alert(JSON.stringify(error));
//                  });
//            }



//         $("input[type='radio']").click(function(){
//                var radioValue = $("input[name='options']:checked").val();
//                if(radioValue){
//                    alert("Test : " + radioValue);
//            }
//        });

//$(document).ready(function(){
//     $('input:radio[name=options]').click(function(){
//             var tmpType = $("input[name='options']:checked").val();
//             		console.log(tmpType);	// A Type 클릭 시 A 출력, B Type 클릭 시 B 출력
//        };
//});

//        $.ajax({
//                type: "POST",
//                url: `/create-reply/${boardId}`,
//                data:JSON.stringify(data),
//                contentType:"application/json; charset=utf-8",
//                dataType: "json"
//            }).done(function(resp){
//                location.href=`/board/${boardId}/`;
//                alert("생성이 완료되었습니다.");
//            }).fail(function(error){
//                alert(JSON.stringify(error));
//            });