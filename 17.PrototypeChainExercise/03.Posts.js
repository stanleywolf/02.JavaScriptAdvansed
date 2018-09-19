function posts() {

    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}\n` +
            `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = []
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
            let string = `${super.toString()}` +
            `\nRating: ${this.getRating()}`;
            if(this.comments.length !== 0) {

                string +=`\nComments:`
                this.comments.forEach(s => string +=`\n * ${s}`);
            }
            return string
        }
        getRating(){
            return this.likes - this.dislikes;
        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content)
            this.views = views
        }
        view(){
            this.views += 1;
            return this;
        }
        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }
    return{Post,SocialMediaPost,BlogPost}
}
let result = posts();
let Post = result.Post;
let SocialMediaPost = result.SocialMediaPost;
let BlogPost = result.BlogPost;

let post = new Post('Post',"Content");
console.log(post.toString());

let scm = new SocialMediaPost('TestTitle','TestContent',25,30);
 scm.addComment("Good Post")
scm.addComment("Verry Good Post")
scm.addComment("Verry Verry Good Post")

console.log(scm.toString());

 let bp = new BlogPost('Stancho','Golqm Pich',1250);
 bp.view()
bp.view()
bp.view()

console.log(bp.toString());