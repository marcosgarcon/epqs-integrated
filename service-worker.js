const CACHE_NAME = 'epqs-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/external-integration.js',
  '/manifest.json',
  // Add all HTML files
  '/5_porques.html',
  '/5s.html',
  '/8d.html',
  '/apqp.html',
  '/cep.html',
  '/controle_injecao.html',
  '/cronoanalise.html',
  '/DashboarddeIndicadores.html',
  '/diagrama-dispersao.html',
  '/dmaic.html',
  '/estamparia.html',
  '/fmea.html',
  '/folha_verificacao.html',
  '/gap-analysis.html',
  '/GerenciadordeDashboards.html',
  '/histograma.html',
  '/ishikawa.html',
  '/kaizen.html',
  '/manutencao.html',
  '/mapeamento-de-processos.html',
  '/masp.html',
  '/matriz-esforco-impacto.html',
  '/matriz-gut.html',
  '/msa.html',
  '/pareto.html',
  '/planejamento.html',
  '/ppap.html',
  '/relatorio-a3.html',
  '/root-cause-analysis.html',
  '/smed.html',
  '/sucata.html',
  '/swot.html',
  '/test-integration.html',
  '/treinamento.html',
  '/vsm.html'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
