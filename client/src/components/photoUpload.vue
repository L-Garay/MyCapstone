<template>
  <div class="col">
      <input type="file" @change="onFileSelected">
      <button class="btn btn-dark" @click="onUpload">upload</button>
      <img :src="imageUrl" height="80" alt="">
  </div>
</template>

<script>
export default {
    name: "photoUpload",
    data(){
        return {
            selectedFile: null,
            imageUrl: '',
            image: null
        }
    },
    methods: {
        onFileSelected(event){
            let photoFile = event.target.files;
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () =>{
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(photoFile[0])
            console.log("this is the image", this.imageUrl);
            this.image = photoFile[0];
        },
        onUpload(){
            let outing =this.$store.state.outings.find(o => o._id == this.$route.params.outingId);
            outing.photos.push(this.imageUrl);
            this.$store.dispatch("editOuting", outing);
            console.log("upload outing object", outing);
            console.log("upload img url",this.imageUrl);
            
            // let photo = this.photoFile
            // {
            //     name: this.image.name,
            //     outingId: outing._id,
            //     url: this.photoFile
            // };
            // console.log("outing", outing.photos);
        }
            // this.$store.dispatch("editOuting", editedOuting);
            // console.log("image url", this.image);
             
    }
}
</script>

<style>

</style>