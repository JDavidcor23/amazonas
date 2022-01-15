
export const fileUpload =  async(file) =>{

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dhu6ga6hl/upload';
    const formData = new FormData();
    formData.append('upload_preset','amazonasProdutcs');
    // const imagesUrl = []
    // file.forEach(async(f) => {
    //     formData.append('file',f);
    //     const resp = await fetch(cloudUrl, {
    //         method: 'POST',
    //         body: formData
    //     })
    //        const cloudResp = await resp.json();
    //        imagesUrl.push(cloudResp.secure_url)
           
            //    imagesUrl.push(cloudResp.secure_url)
    //     });
    //     console.log(imagesUrl)
        formData.append('file',file);
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    }