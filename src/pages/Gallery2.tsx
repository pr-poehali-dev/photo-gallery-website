import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const images = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/files/18e2323a-63de-4219-bcaa-1ff89f4e57b5.jpg',
    alt: '73 участок - вид 1',
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/files/5d704522-c787-4982-8b27-6c7b0675d2ff.jpeg',
    alt: '73 участок - вид 2',
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/files/00d06d28-6f21-44b4-989a-3160edd3efb1.jpeg',
    alt: '73 участок - вид 3',
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/files/19b2cd02-2c9c-48e5-8de2-71819b5b0465.jpeg',
    alt: '73 участок - вид 4',
  },
  {
    id: 5,
    url: 'https://cdn.poehali.dev/files/d8603caf-78b8-4c42-8f64-40d9bb58bfa8.jpeg',
    alt: '73 участок - вид 5',
  },
];

const Gallery2 = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span>Участок 97</span>
            </Link>
            <div className="flex gap-4">
              <Link
                to="/"
                className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Галерея 1
              </Link>
              <Link
                to="/gallery-2"
                className="px-4 py-2 rounded-lg bg-[#9b87f5] text-white"
              >
                Галерея 2
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-montserrat">
            Участок 73
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Фотогалерея объекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer hover-scale"
              onClick={() => openImage(index)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white font-medium">{image.alt}</span>
                  <Icon name="Maximize2" size={24} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Предыдущее фото"
            >
              <Icon name="ChevronLeft" size={32} className="text-white" />
            </button>

            {selectedImage !== null && (
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain animate-scale-in"
              />
            )}

            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Следующее фото"
            >
              <Icon name="ChevronRight" size={32} className="text-white" />
            </button>

            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={32} className="text-white" />
            </button>

            {selectedImage !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery2;