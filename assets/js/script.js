Vue.component('publication', {
    props: ['pub'],
    template: `
        <div class="row mt-1">
            <div class="col">
              <div>
                <span class="fs-4 fst-bolder">{{ pub.title }} </span>
                    <a :href="pub.pdfURL">PDF</a> 
                    <a v-if="pub.pageURL !== null" :href="pub.pageURL">Demo</a> 
              </div>
              <div class="fst-bolder">{{ pub.authors }}</div>
              <div class="fst-italic">
                <span>{{ pub.conference }}</span>
                <span v-if="pub.oral">(Oral)</span>
              </div>
            </div>
            </div>
        </div>
        `
});


Vue.component('post', {
    props: ['post'],
    template: `
        <div class="row mt-1">
            <div class="col">
              <div>
                <a class="fs-4 fst-bolder"
                   :href="post.url">{{ post.title }}
                 </a>
              </div>
            </div>
            </div>
        </div>
        `
});


class Publication {
    constructor(title, authors, conference, pdfURL, pageURL=null, oral=false, imagePath=null) {
        this.title = title
        this.authors = authors
        this.conference = conference
        this.pdfURL = pdfURL
        this.pageURL = pageURL
        this.imagePath = imagePath
        this.oral = oral
    }
}


const PUBLICATIONS = [
    new Publication(
        "Towards Generative Video Compression",
        "Mentzer*, Fabian, Agustsson*, Eirikur, Ballé, Johannes, Minnen, David, Johnston, Nick, and Toderici, George",
        "2021",
        "https://arxiv.org/abs/2107.12038",
    ),
    new Publication(
        "High-Fidelity Generative Image Compression",
        "Mentzer, Fabian, Toderici, George, Tschannen, Michael, and Agustsson, Eirikur",
        "NeurIPS 2020",
        "https://arxiv.org/abs/2107.12038",
        pageURL="https://hific.github.io",
        oral=true,
    ),
    new Publication(
        "Learning better lossless image compression using lossy compression",
        "Mentzer, Fabian, Van Gool, Luc, and Tschannen, Michael",
        "CVPR 2020",
        "https://arxiv.org/abs/2003.10184",
    ),
    new Publication(
        "Learning for Video Compression with Hierarchical Quality and Recurrent Enhancement",
        "Yang, Ren, Mentzer, Fabian, Van Gool, Luc, and Timofte, Radu",
        "CVPR 2020",
        "https://arxiv.org/abs/2003.01966",
    ),
    new Publication(
        "Practical full resolution learned lossless image compression",
        "Mentzer, Fabian, Agustsson, Eirikur, Tschannen, Michael, Timofte, Radu, and Van Gool, Luc",
        "CVPR 2019",
        "https://arxiv.org/abs/1811.12817",
        pageURL = null,
        oral = true,
    ),
    new Publication(
        "Generative adversarial networks for extreme learned image compression",
        "Agustsson*, Eirikur, Tschannen*, Michael, Mentzer*, Fabian, Timofte, Radu, and Van Gool, Luc",
        "ICCV 2019",
        "https://arxiv.org/abs/1804.02958",
    ),
    new Publication(
        "Towards image understanding from deep compression without decoding",
        "Torfason, Róbert, Mentzer, Fabian, Agustsson, Eirikur, Tschannen, Michael, Timofte, Radu, and Van Gool, Luc",
        "ICLR 2018",
        "https://arxiv.org/abs/1803.06131",
    ),
    new Publication(
        "Conditional probability models for deep image compression",
        "Mentzer*, Fabian, Agustsson*, Eirikur, Tschannen, Michael, Timofte, Radu, and Van Gool, Luc",
        "CVPR 2018",
        "https://arxiv.org/abs/1801.04260",
    ),
    new Publication(
        "Deep structured features for semantic segmentation",
        "Tschannen, Michael, Cavigelli, Lukas, Mentzer, Fabian, Wiatowski, Thomas, and Benini, Luca",
        "EUSIPCO 2017",
        "https://arxiv.org/abs/1609.07916",
    ),
    new Publication(
        "Soft-to-hard vector quantization for end-to-end learning compressible representations",
        "Agustsson, Eirikur, Mentzer, Fabian, Tschannen, Michael, Cavigelli, Lukas, Timofte, Radu, Benini, Luca, and Van Gool, Luc",
        "NIPS 2017",
        "https://arxiv.org/abs/1704.00648",
    )
]


var app = new Vue({
    el: '#app',
    data: {
        publications: PUBLICATIONS,
        posts: [
            {"title": "Reverse-Engineering Apple Dictionary",
            "url": "/posts/2020/dictionary/"}
        ]
    },
})