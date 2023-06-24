import { Chat } from './components/Chat';

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <main className='grid place-content-center h-screen'>
      Travel AI
      <Chat />
    </main>
  );
}
