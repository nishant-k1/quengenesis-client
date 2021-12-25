import section1Img from '../../assets/section1Img.svg';
import section2Img from '../../assets/section2Img.svg';
import section2Img1 from '../../assets/section2Img1.svg';
import section2Img2 from '../../assets/section2Img2.svg';
import section2Img3 from '../../assets/section2Img3.svg';
import section2Img4 from '../../assets/section2Img4.svg';
import section3Img from '../../assets/section3Img.svg';
import section4Img1 from '../../assets/section4Img1.svg';
import section4Img2 from '../../assets/section4Img2.svg';
import section4Img3 from '../../assets/section4Img3.svg';
import section6Img1 from '../../assets/section6Img1.svg';
import section6Img2 from '../../assets/section6Img2.svg';
import section6Img3 from '../../assets/section6Img3.svg';
import section6Img4 from '../../assets/section6Img4.svg';


const section1Data={
    title:"We offer your business a transformative set of solutions outlasting all the current trends.",
    subDesc:"Give us a call",
    img:section1Img,
}

const section2aData={
    title1: 'Global team of change-makers and thought-leaders.',
    desc: 'Our team of experienced members and introspective professionals will help you encapsulate new growth opportunities.',
}
const section2Data={
    img: section2Img,
    cards: [    
        {
            img: section2Img1,
            title: 'Quality Assurance',
            desc: 'We follow a systematic way of creating an environment to assure that the services being offered meet the quality requirements.',
        },

        {
            img: section2Img2,
            title: 'Cutting-edge solutions',
            desc: "We take time to understand your work practices and the nature of your business to create a custom solution which would turn to be an efficient solution to your requirements.",
        },

        {
            img: section2Img3,
            title: 'Robust R & D',
            desc: 'We prioritize intense research and analysis before carrying out the any action plan, leading to more sustainable, viable and economical advantages.',
        },

        // {
        //     img: section2Img4,
        //     title: 'Global team of change-makers and thought-leaders.',
        //     desc: 'Our team of experienced members and introspective professionals will help you encapsulate new growth opportunities.',
        // },
    ]
}
 
const section3Data={
    img: section3Img,
    title:'Our Service section3s',
    desc: "We offer global technology and marketing services with an analytical and creative focus at the core of our business engagements.",
}

// const section4Data={
//     title:"Get a free quote now!",
//     desc: 'sdkhjsdhjk  fsdhj hj sdfhjksdfhjkdhjk dhjk',
// }

const section4Data={
    title: 'This is what our customers say about us',
    cards: 
    [    
        {
            img: section4Img1,
            title: 'Technology / IT services',
            desc: 'We work as an extension of your IT team either onsite or off-site offering futuristic and dynamic applications catering to your business requirements.',
        }, 

        {
            img: section4Img2,
            title: 'API Integration',
            desc: 'We provide API integrations carrying through complex business prerequisites to execution, exhibiting your brands. ',
        },
        {
            img: section4Img3,
            title: 'Sales and marketing consultations',
            desc: 'We give a comprehensive analysis of the market and help clients to improve their business. We also assist businesses in selecting and efficiently utilizing the latest marketing tools.',

        },
    ]
}

const section6Data={
        cards: 
        [    
            {
                img: section6Img1,
            }, 
    
            {
                img: section6Img2,
            },
            {
                img: section6Img3,
            },
            {
                img: section6Img4,
            },  
        ]
}
export default section1Data;

export {section2aData, section2Data, section3Data, section4Data, section6Data};


