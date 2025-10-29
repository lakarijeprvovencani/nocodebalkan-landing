import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all testimonial images
const testimonialImages = [
  '/testimonials/0-02-05-0403539948515e4372dc78c70cce582f7e67b0a0dfae4ae8619722ce3f1bcd50_64d1540c7346bbef.jpg',
  '/testimonials/0-02-05-0ba890c0b15ecdba4f6d443ba0890e765400999a5578149230112bf07810f7f9_79e7e94a8c6f4dbb.jpg',
  '/testimonials/0-02-05-12ff7aa3ef7a3faea017dde7da4ae4a0ef26ed2415bc333fe3b467ea618ed335_2f1bedb76703ff09.jpg',
  '/testimonials/0-02-05-1306ae60ad71da2d42f24d20b6244d575d14b3706b8fa2f7bd90fcea7d1dbb05_31cff7b041f56f32.jpg',
  '/testimonials/0-02-05-133a84976050f385d436397d028001b3911d0618690490fb35523a1fd765493a_16618a927dbba16.jpg',
  '/testimonials/0-02-05-1b3fc502030691a021bd1f090587ad5187197f0bf27e8c08f1b2494e166530bd_ccd2810d05e4de39.jpg',
  '/testimonials/0-02-05-1d3cfa9692392fe23a6c6ad70e67267a876a7d377e8287266f91ece75b000b41_40a787e3c947c98b.jpg',
  '/testimonials/0-02-05-1eb5000bce1b37b1d7023cd61b85224569e4b62b3986b0a266c8a816ee328776_3cb9a266257c6a14.jpg',
  '/testimonials/0-02-05-2018688d20a66c825803b5bf0d5005f33a1a818e46237405b9300e9f86b1b055_485fce91d8178e26.jpg',
  '/testimonials/0-02-05-23c09c78deb3bdbe0b3f5cfc034e0cdb3ca9830bea95460bfd5b693c1ed35207_b5e87b449a4b29b9.jpg',
  '/testimonials/0-02-05-2cd7d33f1c6659db1aa77ed0f96a36b026ae77e23c16d099eceec3c4e8fc4a3e_267eaf8a21e9304.jpg',
  '/testimonials/0-02-05-3359a8b0cc5aaea8d7c2738aa6fc70151229707ad9618c1cd3d9ad33d54ba5b0_6a383904ca6dd981.jpg',
  '/testimonials/0-02-05-399707a466e5cb37e8eed9aa1e4b8ab7eb89fbb09922cb5ba9fffce7860b2f95_5bf47f4fbb60dc82.jpg',
  '/testimonials/0-02-05-431f8b061953525245260e80f73aceec483eef413acdf0913c717f535d7ec571_3279d66e3bd3f392.jpg',
  '/testimonials/0-02-05-49d9d7bf19ffdbf9cb1c991d0867b88e7e691241632903e513b91a60ce57a206_6d363e5cc000bdc6.jpg',
  '/testimonials/0-02-05-4f4ac749f1412acf346fcb930318a231afc96f3ea2b794cb429052e6dd2a6fd4_74ab9ae72b727ce4.jpg',
  '/testimonials/0-02-05-59b15afc69d405d0e25f81243d74e2db76ffe5885abcea10a4f39a93d63bd626_d30e5e8f547b8648.jpg',
  '/testimonials/0-02-05-5e099bff9cba5744e5492d4e125c8e4c50d019f927f0e30e7355c4f462929f7a_3c2fe846c39e01f5.jpg',
  '/testimonials/0-02-05-64970a002bcc8a706df76a37e8048b08fc0d8421d2b3cf75327cf06754d4ca65_501d373aa494fdc0.jpg',
  '/testimonials/0-02-05-69e98bc470f8756476694a3d110c384644122c0a09cd1f26db350bf39b4fef5a_83f3882bd300b04a.jpg',
  '/testimonials/0-02-05-6aa2a0ee3c5f730b128b5ef32660a3d5216d2b79fb414f92163c9f98856655f3_7e0802e5a20ea69e.jpg',
  '/testimonials/0-02-05-6aaec3c8d5c1df8e96d187a415cece90a99e7742431816d6ecaed9f9702bc78d_c0f113327d79d5a5.jpg',
  '/testimonials/0-02-05-6c26fa45ef01196957e0fbf190e7de825f80a5b32338fa63366ca237deed749c_2be28986d9dbe463.jpg',
  '/testimonials/0-02-05-6c52aab99cbcce8087584fa2aac4cb348f9ea1ecaa97c0c05357128ffc18c94a_d22dedd88b6502ce.jpg',
  '/testimonials/0-02-05-76fb41dfdf0778083e9b925f445627153e5c5eccdad390bf89d7773d0a62067c_36b12e606500761.jpg',
  '/testimonials/0-02-05-7b5029d496cc5ea953ffed62060a462284402e72b22b7ee8f16f25a71ac12287_6887d34486d25815.jpg',
  '/testimonials/0-02-05-852bb6a14873a81c0527fab635d80dfa69687304ea8f1d84c546abaec8a32515_c5becda7f53a3963.jpg',
  '/testimonials/0-02-05-8f734c1d998859710ae6733c3f19160f21c8cfaa40d0a0d80ef586a7c933cb3e_78ff59dc9ac2ba72.jpg',
  '/testimonials/0-02-05-918d97ea9c30dac8ee7604cff2a2a17605066f1bb47bf103fdec7db19d0bf966_54a7b1ba784b7552.jpg',
  '/testimonials/0-02-05-9465b6e96089d0ac047ca26c6b78e83d4a9ee6de02c1ff049c4503b357b85400_d09dd8c95259bbd6.jpg',
  '/testimonials/0-02-05-957945a032f407725a6dad7a2b9465160f74819c8235e54bf0ac906f7d47e7b2_abf221d77ef3f699.jpg',
  '/testimonials/0-02-05-96fafa96b61e7e40b74905b8259ff3243a3a00028b2bd1bbfdba15d385b677b9_b6bbb8ea97650f2f.jpg',
  '/testimonials/0-02-05-b429e04f6ccebf4b6ce834bbf3f7515ffd5583cf8aef0f34ae2c133202c69661_77ab7e88ccc70cb9.jpg',
  '/testimonials/0-02-05-b73df47a0cff5b14e80291fc50926fc19393dd65cdeb5f22bdec79f7fe5d05cc_b6bcbad85940860d.jpg',
  '/testimonials/0-02-05-b79065194ae82a3274d0e0edab92b36d6ba9aebe2da35485a94ec0da29e2be17_2b9d150d9d4f9f6e.jpg',
  '/testimonials/0-02-05-bbb897de8c5f24abac6cb776e16169241e8739e79bb960cab0fc79fa6045e382_c2520cc3ae44bc26.jpg',
  '/testimonials/0-02-05-c09eda2ea83096528adf1862def5c734d889956d3373e1912f626228f3c4a2fc_47074737187032a6.jpg',
  '/testimonials/0-02-05-d13231e8eb9ff5091f2bec67dcd592902402f93422c08ef8acbe52b18b769e53_c80cea5a4c033ebb.jpg',
  '/testimonials/0-02-05-d1b6761a291ed3388acbcc46cd3ee7cfb6191e8db31ba681d43ab1fc1d15035f_705ff42c360e2020.jpg',
  '/testimonials/0-02-05-d209c4f3c5854bec2f48493b26394ac6d3758b66922a166ec83e57232c5ff55e_d84db4dc58dccdc7.jpg',
  '/testimonials/0-02-05-d54e64b6691591b519f7b5d38e8790e5f34e0ff75c8445ed1a627666e669c177_34c9ef05a61fbbe5.jpg',
  '/testimonials/0-02-05-da24900f6f726c9555aadd87efdf8baddc8f4ac08815303bbebb42a494389697_4ae77f97dd120701.jpg',
  '/testimonials/0-02-05-db4362ee5bb78da14e30d9b52da037235a4d216e9b0f9606643cf1f1c75403f2_cd0e924a049c328.jpg',
  '/testimonials/0-02-05-dbaf611b47c14edefa403b82f17178165dfaa6505f5fcc897dbe80b6c1451dd9_c91eb5c332adbd88.jpg',
  '/testimonials/0-02-05-fd0e592decffe3b04ba2d2353fe6eb295e76296efff0469a5cd8147e6383eab7_d33013c06319d1b1.jpg',
  '/testimonials/0-02-05-fe0bff86f0e10d29df3b0dfe7bb6d284f07c2e6abdcdc396aea8600073d3fc42_33e9f0cf650f560.jpg',
];

const TestimonialImagesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 -left-20 w-64 h-64 bg-purple-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -right-20 w-64 h-64 bg-blue-700/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            x: [0, -30, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Šta naši članovi kažu
          </h2>
          <p className="text-xl text-gray-300">
            Pročitaj iskustva onih koji su već počeli svoju no-code transformaciju
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Main Image Display */}
          <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={testimonialImages[currentIndex]}
                alt={`Testimonial ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:bg-purple-600 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-900/80 text-white hover:bg-purple-600 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialImagesSlider;

