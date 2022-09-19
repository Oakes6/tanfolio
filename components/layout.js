import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Container from './Container';

const name = 'Tanner Oakes';

export default function Layout({ children, home }) {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
                <div className="flex flex-col-reverse sm:flex-row items-start">   
                    <div className="flex flex-col pr-8">
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                            Senior Backend Engineer @ LTK
                        </h2>
                        <p className="text-gray-600 dark:text-gray-200 mb-4">
                            Building out complex distributed systems so you don't have to.
                        </p>
                    </div>
                    <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                        <Image
                        alt={name}
                        height={176}
                        width={176}
                        src="/images/profile2.png"
                        priority
                        className="rounded-full filter"
                        />
                    </div>
                </div>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                    </div>
                )}
            </div>
        </Container>
    )
}