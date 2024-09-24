// 1) =====================================================
// ================= Default Export =======================
// ========================================================

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    };


    publish = () => {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
 
};

export default Post;





