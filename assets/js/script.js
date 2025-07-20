Vue.component('publication', {
    props: ['pub'],
    template: `
        <div class="row mt-4">
            <div class="col">
              <div>
                <span class="fs-5 fw-bolder">{{ pub.title }} </span>
                    <a v-if="pub.pageURL !== null" :href="pub.pageURL"><strong>Demo</strong></a>
                    <a :href="pub.pdfURL">arXiv</a>
              </div>
              <div >{{ pub.authors }}</div>
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
        "Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context, and Next Generation Agentic Capabilities",
        "Gemini Team",
        "arxiv (2025)",
        "https://arxiv.org/abs/2507.06261",
        ),
    new Publication(
        "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context",
        "Gemini Team",
        "arxiv (2024)",
        "https://arxiv.org/abs/2403.05530",
        ),
    new Publication(
        "GIVT: Generative Infinite-Vocabulary Transformers",
        "Michael Tschannen, Cian Eastwood, Fabian Mentzer",
        "ECCV 2024",
        "https://arxiv.org/abs/2312.02116",
        ),
    new Publication(
        "Finite Scalar Quantization: VQ-VAE Made Simple",
        "Fabian Mentzer, David Minnen, Eirikur Agustsson, Michael Tschannen",
        "ICLR 2024",
        "https://arxiv.org/abs/2309.15505",
    ),
    new Publication(
        "High-Fidelity Image Compression with Score-based Generative Models",
        "Emiel Hoogeboom, Eirikur Agustsson, Fabian Mentzer, Luca Versari, George Toderici, Lucas Theis",
        "preprint (2023)",
        "https://arxiv.org/abs/2305.18231",
    ),
    new Publication(
        "M2T: Masking Transformers Twice for Faster Decoding",
        "Fabian Mentzer, Eirikur Agustsson, Michael Tschannen",
        "ICCV 2023",
        "https://arxiv.org/abs/2304.07313",
    ),
    new Publication(
        "Multi-Realism Image Compression with a Conditional Generator",
        "Eirikur Agustsson, David Minnen, George Toderici, Fabian Mentzer",
        "CVPR 2023",
        "https://arxiv.org/abs/2212.13824",
    ),
    new Publication(
        "Lossy Compression with Gaussian Diffusion",
        "Lucas Theis, Tim Salimans, Matthew D. Hoffman, Fabian Mentzer",
        "ArXiv (2022)",
        "https://arxiv.org/abs/2206.08889",
    ),
    new Publication(
        "VCT: A Video Compression Transformer",
        "Fabian Mentzer, George Toderici, David Minnen, Sung-Jin Hwang, Sergi Caelles, Mario Lucic, and Eirikur Agustsson",
        "NeurIPS 2022",
        "https://arxiv.org/abs/2206.07307",
    ),
    new Publication(
        "Neural Video Compression using GANs for Detail Synthesis and Propagation",
        "Mentzer*, Fabian, Agustsson*, Eirikur, Ballé, Johannes, Minnen, David, Johnston, Nick, and Toderici, George",
        "ECCV 2022",
        "https://arxiv.org/abs/2107.12038",
    ),
    new Publication(
        "High-Fidelity Generative Image Compression",
        "Mentzer, Fabian, Toderici, George, Tschannen, Michael, and Agustsson, Eirikur",
        "NeurIPS 2020",
        "https://arxiv.org/abs/2006.09965",
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
