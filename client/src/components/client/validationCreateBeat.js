export function ValidationCreateBeat(form, fieldsToValidate, mode) {
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
  const MAX_WAV_SIZE = 150 * 1024 * 1042; // 150 MB
  let error = {};
  const modeOf = mode


  const regexName = /^.{1,50}$/;
  const regexImage = /\.jpg$|\.png$/i;
  const regexAudioMP3 = /\.mp3$|\.wav$|\.ogg$/i;

  if (fieldsToValidate === "*") {
//pasamos de object a array
    fieldsToValidate = Object.keys(form);
  }


  
  fieldsToValidate.forEach((field) => {
    switch (field) {
      case "name":
        if (!regexName.test(form.name))
          error.name =
            "The name of your beat must have between one and 50 characters.";
        break;

      case "priceAmount":
        if (form.priceAmount < 1)
          error.priceAmount = "The price of your beat must be greater than 1.";
        break;

      // Validar tamaño de imagen
      case "image":
        if (mode === "edit") break;
    
        if (form.image.size > MAX_FILE_SIZE)
          error.image =
            "The size of the image is too large. Maximum allowed size is 10 MB.";
        if (form.image && !regexImage.test(form.image.name))
          error.image = "You must upload a jpg or png file";
        break;

      case "audioMP3":
        if (mode === "edit") break;

        if (form.audioMP3.size > MAX_FILE_SIZE)
          error.audioMP3 =
            "The size of the audio is too large. Maximum allowed size is 10 MB.";
        if (!form.audioMP3) error.audioMP3 = "You must upload a Beat";
        if (!regexAudioMP3.test(form.audioMP3.name))
          error.audioMP3 = "You must upload a mp3 or wav file";
        break;

        case "audioWAV":
        if (mode === "edit") break;

        if (form.audioWAV.size > MAX_WAV_SIZE)
          error.audioWAV =
            "The size of the audio is too large. Maximum allowed size is 150 MB.";
        if (!form.audioWAV) error.audioWAV = "You must upload a Beat";
        if (!regexAudioMP3.test(form.audioWAV.name))
          error.audioMP3 = "You must upload a mp3 or wav file";
        break;

      case "bpm":
     
        if (form.bpm > 350 || form.bpm < 20)
        
          error.bpm = "Your beat must have between 20 and 350 bpm.";
        break;

        case "genre":
       
          if (!form.genre || form.genre === "") error.genre = "You must select a genre";
          break;

      default:
        break;
    }
  });

  return error;
}
