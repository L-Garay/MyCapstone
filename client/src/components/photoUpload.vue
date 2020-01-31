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
            this.photoFile = event.target.files;
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () =>{
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(photoFile[0])
            this.image = photoFile[0];
        },
        onUpload(){
            let outing =this.$store.state.outings.find(o => o._id == this.$route.params.outingId);
            let photo = this.photoFile[0]
            debugger
            // {
            //     name: this.image.name,
            //     outingId: outing._id,
            //     url: this.photoFile
            // };
            outing.photos.push(photo);
            console.log("outing", outing.photos);
            // this.$store.dispatch("editOuting", outing);
        }
            // this.$store.dispatch("editOuting", editedOuting);
            // console.log("image url", this.image);
             
    }
}
</script>

<style>

</style>