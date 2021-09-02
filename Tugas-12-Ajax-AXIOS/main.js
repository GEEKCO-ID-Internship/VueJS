var vm = new Vue({
    el: '#app',
    data: {
        title : '',
        description : '',
        errors :[],
        members :[],
        photoDomain: 'http://demo-api-vue.sanbercloud.com'
    },
    methods : {
        validationForm : function(){
            this.errors = []

            if(this.title.length < 5){
                this.errors.push('Title minimal 5 karakter')
                this.$refs.title.focus()

            }

            if(this.description.length > 10){
                this.errors.push('Description tidak boleh lebih dari 10 karakter')
                this.$refs.description.focus()

            }
        },

        clearForm : function(){
            this.title = ''
            this.description = ''
        },

        submitForm : function(){

            this.validationForm()

            if(this.errors.length === 0) {

                let formData = new FormData()
                formData.append('title',this.title)
                formData.append('description', this.description)
                
                const config = {
                    method : "post",
                    url : "http://demo-api-vue.sanbercloud.com/api/blog",
                    data : formData
                }

                axios(config)
                    .then( (response)=> {
                        this.clearForm()
                        this.getBlogs()
                        alert(response.data.message)
                        
                    })
                    .catch( (error)=>{

                    })

                
            }
        },

        getMembers : function(){

            const config = {
                method : "get",
                url : "http://demo-api-vue.sanbercloud.com/api/member"
            }

            axios(config)
                .then( (response)=> {
                    console.log(response.data)
                })
                .catch( (error)=> {
                    console.log(error)
                })
            
        },

        removeBlog : function(id){
         
            const config = {
                method : "post",
                url : `http://demo-api-vue.sanbercloud.com/api/blog/${id}`,
                params : { _method : "DELETE"  }
            }

            axios(config)
            .then( ()=> {
                console.log()
            })
        },
        created(){
            this.getMembers()
        }
    }
})