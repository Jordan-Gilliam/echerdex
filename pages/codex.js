import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function Codex() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/codex`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Codex
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Codex The Universe is a vast interconnected web of multi dimensional energy. This Web
              exists as singularity of repeating mathematical sequences that exists as geometric
              patterns. With the discovery of a experimental Science known as Crystallography. We’re
              now able to use X-Ray Diffraction to determine the structure of atomic elements and
              the arrangement of complex molecule in crystalline solids. Formed by the natural,
              simplistic and logical arrangements of Stellated Octahedrons. Emerging from the
              pattern created by close-packing spheres It has been determined that six fold
              geometric symmetry is the fundamental structure of all atomic particles. Which is the
              Foundation of the Ancient Mystery Schools. For the Flower of Life is a simple
              geometric shape. Fixing two sticks together at an angle to create a compass or tying a
              string to a fixed stick and moving around it, we may create a perfect circle on the
              ground. There are only so many iterations of symmetrical circular Geometry that
              probability that a ancient scientists created this pattern is almost certain. Through
              their observations they became aware of the infinite mathematical patterns that emerge
              throughout nature. Realizing the significance our ancestors built the mystery schools
              to study the phenomenon. They concluded that the Quantum Singularity manifests 7
              principles. Conception, Vibration, Polarity, Rhythm, Cause & Effect, Gender and
              Correspondence. That was written down by three initiates in the Kybalion. Using these
              laws they determined the nature of every point within the flower of life. Once named,
              it became known as a Tree of Life, with each point representing a archetypal Deity.
              These archetypes are the polarity/nature of any given sequence within a system of
              energy. Thus each Deity represented a planet, animal, personality, emotion, nature,
              color etc… Imgur: Arcana Think of them as Legends on a Map. For once the pattern is
              known any student may place their Deities within their respective hierarchy, thus
              recreating the ancient system. We may then use the Key to map out any metaphysical
              phenomenon. Allowing us to theorize, study and make predictions using what is
              essentially a complex Venn Diagrams with a built in Flow Chart. It was this system
              that the Egyptians taught the Greeks. Recounted in the Timaeus. In which they
              dedicated the first academies to the study of Sacred Geometry. Becoming the Foundation
              of all Modern Science.
            </p>
            <p>
              He leads the clean energy group which develops 3D air pollution-climate models, writes
              differential equation solvers, and manufactures titanium plated air ballons. In his
              free time he bakes raspberry pi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
              placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem
              nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
