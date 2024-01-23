import Link from "next/link";
import Image from "next/image";
export default function About() {
    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">About page</h1>
            <h3 className="text-lg mb-6">
                This is a mini website that shows you the population of some countries around the world.
            </h3>
            <Image
              src='/images/world-population.jpg'
              width={300}
              height={100}
              alt='world-population'
            />
            <div className="mb-6">
                This dataset is from Kaggle:{" "}
                <Link className="text-blue-500 underline" href="https://www.kaggle.com/datasets/rajkumarpandey02/2023-world-population-by-country">
                    Kaggle Dataset website
                </Link>
            </div>
            <Link href='/' className="text-blue-500 underline">Back to home page</Link>
        </div>
    );
}
