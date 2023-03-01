import Link from 'next/link';

export default function Card({ title, description, link }: any) {
	return (
		<>
			<div className='md:w-1/4 p-2 flex flex-col items-center bg-zinc-800 rounded'>
				<img src='./account.svg' width='100px' />
				<div className='text-center mt-6 text-white'>
					<div className='font-bold text-xl mb-3'>{title}</div>
					<div>{description}</div>
				</div>
				<Link href={'/' + link} className='w-full'>
					<button className='bg-green-800 active:bg-green-800 hover:bg-green-600 transition duration-200 py-3 mt-20 rounded w-full '>
						Cek Sekarang!
					</button>
				</Link>
			</div>
		</>
	);
}
