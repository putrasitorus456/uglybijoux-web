import TextBlock from "./text-block";

const AboutSection = () => {
  return (
    <section className="font-anodina w-full bg-white px-6 sm:px-10 md:px-20 py-16">
      <div className="max-w-4xl mx-auto text-left text-black">
        {/* Title */}
        <header className="mb-16 text-left">
          <h2 className="text-xs sm:text-sm tracking-[5px] uppercase font-medium mb-2 text-neutral-500">
            A GLIMPSE OF
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight">
            Uglybijoux
          </h1>
        </header>

        {/* Paragraphs */}
        <div className="space-y-6 leading-relaxed text-[15px] sm:text-[16px] md:text-lg text-stone-800">
          <TextBlock>
            Run by us, two friends: <span className="font-semibold">Kome</span> and <span className="font-semibold">Arya</span>.
          </TextBlock>

          <TextBlock>
            We create pieces you&rsquo;ll love wearing and love more to show off. Pieces that make you feel beautiful, precious and seen.
          </TextBlock>

          <TextBlock>
            The brand is a personal initiative that started during Covid quarantine in our home atelier/office/packing centre in Yogyakarta, Indonesia.
          </TextBlock>

          <TextBlock>
            Our Uglybijoux are composed of materials and funky elements we found around us — leftover beads, random finds, and artisan-crafted gems.
          </TextBlock>

          <TextBlock>
            Uglybijoux keeps us creatively stimulated. It&rsquo;s an exciting art initiative turned serious business.
          </TextBlock>

          <TextBlock isBold className="text-lg tracking-tight font-bold italic">
            But we have fun, always.
          </TextBlock>

          <TextBlock>
            The joy of running the brand is rooted in the process itself — and disrupting what&rsquo;s considered ugly or pretty.
          </TextBlock>

          <TextBlock>
            We mix cheap and expensive materials, ignore the masculine–feminine silhouette, and design jewellery with a general fuck-it attitude.
          </TextBlock>

          <TextBlock>
            All while creating a funky and fabulous universe where you and I can actually enjoy ourselves.
          </TextBlock>

          <TextBlock>
            We&rsquo;re just making pieces that we love and adore — secretly hoping that you will too.
          </TextBlock>

          <TextBlock className="font-semibold">Let&rsquo;s start.</TextBlock>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
