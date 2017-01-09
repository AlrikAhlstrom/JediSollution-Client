
// TODO: change localhost port

function GetAllPosts() {
    jQuery.support.cors = true;
    $.ajax({
        url: 'http://localhost:3247/api/discussion/post',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}
function GetPost() {
    jQuery.support.cors = true;
    var id = $('#txtPostId').val();
    $.ajax({

        url: 'http://localhost:52413/HostXServer/BlogService.svc/GetPost/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            ShowPost(data);
        },
        error: function (x, y, z) {

            alert("error:" + x + '\n' + y + '\n' + z);

        }
    });
}

function AddPost() {
    jQuery.support.cors = true;
    var post = {
        //Title: $('#txtaddPostTitle').val(),
        PostTitle: "client test PostTitle",
        //Content: $('#txtaddPostCont').val()
        PostContent: "client test PostContent"
    };

    console.log(post);

    $.ajax({
        url: 'http://localhost:52413/HostXServer/BlogService.svc/CreatePost',
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(post),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
    //GetAllPosts();
}

function GetComments() {
    jQuery.support.cors = true;
    var id = $('#txtPostIdforComment').val();
    $.ajax({
        //url: 'http://localhost:52413/HostXServer/BlogService.svc/post/' + id + '/comments',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            WriteComments(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}
function AddComment() {
    jQuery.support.cors = true;
    var post = {
        PostId: $('#txtPostIdforComment').val(),
        Content: $('#txtaddComment').val()
    };

    $.ajax({
        url: 'http://localhost:52413/HostXServer/BlogService.svc/createcomment',
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(post),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            WriteResponse(data);
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
    GetComments();
}

function WriteResponse(posts) {
    var strResult = "<table><th>PostID</th><th>Post Title</th><th>Post Content</th>";
    $.each(posts, function (index, post) {
        strResult += "<tr><td>" + post.PostId + "</td><td> " + post.PostTitle + "</td><td>" + post.PostContent + "</td></tr>";
    });
    strResult += "</table>";
    $("#divResult").html(strResult);
}

function WriteComments(comments) {
    var strResult = "<table><th>CommentID</th><th>Comment</th>";
    $.each(comments, function (index, comment) {
        strResult += "<tr><td>" + comment.Id + "</td><td> " + comment.Content + "</td><td>";
    });
    strResult += "</table>";
    $("#divResult").html(strResult);
}

function ShowPost(post) {
    console.log("showpost logs");
    console.log(post.PostContent);
    //alert(post);
    if (post !== null) {

        var strResult = "<table><th>PostID</th><th>Post Title</th><th>Post Content</th>";
        strResult += "<tr><td>" + post.PostId + "</td><td> " + post.PostTitle + "</td><td>" + post.PostContent + "</td></tr>";
        //strResult += "<tr><td>" + post + "</td></tr>";
        strResult += "</table>";
        $("#divResult").html(strResult);
    }
    else {
        $("#divResult").html("No Results To Display");
    }
}