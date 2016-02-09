function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {

  try {
    
    var destinationFolder = "Users files";
    var folder, folders = DriveApp.getFoldersByName(destinationFolder);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(destinationFolder);
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + form.myName);
    
    return "Your file was uploaded!";
    
  } catch (error) {
    return error.toString();
  }
  
}
