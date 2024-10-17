import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();  // Routerdan hozirgi pathni olish
    const [isVisible, setIsVisible] = useState(false);  // Tugma ko'rinishi holati

    // Sahifa scroll bo'lganda yuqoriga qaytish tugmasi uchun ko'rinishni boshqarish
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);  // Agar sahifa 300px dan ko'proq pastda bo'lsa, tugmani ko'rsatish
        } else {
            setIsVisible(false);  // Aks holda, tugmani yashirish
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);  // Sahifa scroll hodisasini kuzatish

        return () => {
            window.removeEventListener('scroll', toggleVisibility);  // Komponent unmounted bo'lganda listenerni o'chirish
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Silliq scroll animatsiyasi
        });
    };

    useEffect(() => {
        scrollToTop();  // Path o'zgarganda avtomatik scroll qilish
    }, [pathname]);

    return (
        <div>
            {isVisible && (
                <div onClick={scrollToTop} style={styles.scrollToTop}>
                    ⬆️
                </div>
            )}
        </div>
    );
};

// Tugma uchun CSS uslublar
const styles = {
    scrollToTop: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'opacity 0.4s ease',  // Silliq ko'rinish animatsiyasi
        zIndex: 1000,
    },
};

export default ScrollToTop;
