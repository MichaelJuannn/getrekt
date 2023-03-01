import Card from '@/components/card';
import { Navbar } from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className='min-h-screen bg-black'>
				<Navbar />
				<main className='mt-5'>
					<div className='flex justify-center gap-10'>
						<Card
							title='Periksa Rekening'
							description='Pastikan keamanan uang anda dengan memeriksa rekening tujuan, periksa disini sebelum anda melakukan transaksi lebih lanjut.'
							link='rekening'
						/>
						<Card
							title='Periksa Nomor'
							description='Pastikan keamanan uang anda dengan memeriksa rekening tujuan, periksa disini sebelum anda melakukan transaksi lebih lanjut.'
							link='nomor'
						/>
					</div>
				</main>
			</div>
		</>
	);
}
