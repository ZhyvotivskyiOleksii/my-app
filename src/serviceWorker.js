const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.[0-9]+){0,2}\.[0-9]+$/
    )
);

export function register(config) {
    // Проверяем, что код выполняется в production среде и браузер поддерживает Service Worker
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL || '/my-app', window.location.href);
        
        // Проверяем, что URL происхождения соответствует текущему местоположению
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${window.location.origin}/service-worker.js`;

            if (isLocalhost) {
                // Если приложение работает на localhost, проверяем, существует ли сервисный воркер
                checkValidServiceWorker(swUrl, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
                    );
                });
            } else {
                // Если приложение работает не на localhost, регистрируем сервисный воркер
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // Новый контент доступен, пользователю предложено обновиться
                            console.log('New content is available; please refresh.');
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            // Контент кэширован для оффлайн использования
                            console.log('Content is cached for offline use.');
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch((error) => {
            console.error('Error during service worker registration:', error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    // Проверка существования сервисного воркера
    fetch(swUrl)
        .then((response) => {
            const contentType = response.headers.get('content-type');
            if (
                response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)
            ) {
                // Если сервисный воркер не найден, обновляем страницу и отменяем регистрацию
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Если сервисный воркер найден, регистрируем его
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log(
                'No internet connection found. App is running in offline mode.'
            );
        });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
        });
    }
}
