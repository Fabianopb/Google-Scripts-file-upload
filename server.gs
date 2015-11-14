function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {

  try {
    
    var dropbox = "Users files";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + form.myName);
    
    return "Your file was sent to Ruby! :) You can close this tab and go back to the form!";
    
  } catch (error) {
    return error.toString();
  }
  
}
