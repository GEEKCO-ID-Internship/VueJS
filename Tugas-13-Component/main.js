
    
    Vue.component("membersComponent", {
        props: {
            members: {
                type: Array,
                required: true
            }
        },
        template:`
        <table border=1>
                <tr v-for="member of members">
                    <td>
                        <img width=100 :src="photoDomain + member.photo_profile" alt="">
                    </td>
                    <td>
                        <b>ID : </b> {{ member.id }} <br>
                        <b>Name : </b> {{ member.name }} <br>
                        <b>Address : </b> {{ member.address }} <br>
                        <b>Phone : </b> {{ member.no_hp }} <br>
                    </td>
                    <td>
                        <button @click="editMember(member)">Edit</button>
                        <button @click="removeMember(member.id)">Hapus</button>
                        <button @click="upload(member)">Upload</button>
                    </td>
                </tr>
    
            </table>`,
            data(){
                return {
                name : '',
                address : '',
                no_hp : '',
                errors :[],
                members :[],
                photoDomain: 'http://demo-api-vue.sanbercloud.com/',
                buttonStatus: 'submit',
                idEditMember: null,
                idUploadMember: null
                }
            },
            methods : {
                
                upload : function(member){
                    this.name = member.name
                    this.address = member.address
                    this.no_hp = member.no_hp
                    this.buttonStatus = 'upload'
                    this.idUploadMember = member.id
                },
        
                removeMember : function(id){
                 
                    const config = {
                        method : "post",
                        url : `http://demo-api-vue.sanbercloud.com/api/member/${id}`,
                        params : { _method : "DELETE"  }
                    }
        
                    axios(config)
                    .then( (response)=> {
                        this.getMembers()
                        alert(response.data.message)
                    })
                    .catch( ()=>{
                        console.log(error)
                    })
                },
        
                editMember : function(member){
                    this.name = member.name
                    this.address = member.address
                    this.no_hp = member.no_hp
                    this.buttonStatus = 'update'
                    this.idEditMember = member.id
                },
        }})

        var vm = new Vue({
            el:'#app',
            data: {
                name : '',
                address : '',
                no_hp : '',
                errors :[],
                members :[],
                photoDomain: 'http://demo-api-vue.sanbercloud.com/',
                buttonStatus: 'submit',
                idEditMember: null,
                idUploadMember: null,
                components : {
                    membersComponent :{}
                },
            },
            methods:{
                submitPhoto : function(id){
                    let file = this.$refs.photo.files[0]
        
                    let formData = new FormData()
                    formData.append('photo_profile', file)
        
                    let config = {
                        method : "post",
                        url : `http://demo-api-vue.sanbercloud.com/api/member/${id}/upload-photo-profile`,
                        data : formData
                    }
        
                    axios(config)
                        .then((response)=>{
                            this.clearFormCancel()
                            this.getMembers()
                            alert(response.data.message)
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                },
                updateMember : function(id){
                    this.validationForm()
                    if(this.errors.length === 0){
                        let formData = new FormData()
                        formData.append('name',this.name)
                        formData.append('address', this.address)
                        formData.append('no_hp', this.no_hp)
                    
                        let config = {
                            method : "post",
                            url : `http://demo-api-vue.sanbercloud.com/api/member/${id}`,
                            params : { _method : 'PUT'},
                            data : formData
                        }
        
                        axios(config)
                            .then( (response)=> {
                                this.clearForm()
                                this.getMembers()
                                alert(response.data.message)
                                
                            })
                            .catch( (error)=>{
                                console.log(error)
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
                            this.members = response.data.members
                            
                            
                        })
                        .catch( (error)=> {
                            console.log(error)
                        })
                    
                },
                validationForm : function(){
                    this.errors = []
        
                    if(this.name.length < 5){
                        this.errors.push('Name minimal 5 karakter')
                        this.$refs.name.focus()
                    }
                },
        
                clearForm : function(){
                    this.name = ''
                    this.address = ''
                    this.no_hp = ''
                },
        
                clearFormCancel : function(){
                    this.name = ''
                    this.address = ''
                    this.no_hp = ''
                    this.buttonStatus = 'submit'
                    this.idEditMember = null
                    this.idUploadMember = null
                },
        
                submitForm : function(){
        
                    this.validationForm()
        
                    if(this.errors.length === 0) {
        
                        let formData = new FormData()
                        formData.append('name',this.name)
                        formData.append('address', this.address)
                        formData.append('no_hp', this.no_hp)
                        
                        const config = {
                            method : "post",
                            url : "http://demo-api-vue.sanbercloud.com/api/member",
                            data : formData
                        }
        
                        axios(config)
                            .then( (response)=> {
                                this.clearForm()
                                this.getMembers()
                                alert(response.data.message)
                                
                            })
                            .catch( (error)=>{
        
                            })
        
                        
                    }
                },
        
                created(){
                    this.getMembers()
                }
            }

            
            
        })