const container = document.getElementById('cards-container');

async function loadDatos() {
    try {
        const response = await fetch('datos.json');
        const datos = await response.json();

        datos.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = `liquid-glass card rounded-3xl p-6 animate__animated animate__fadeInUp`;
            card.style.animationDelay = `${index * 0.05}s`;

            const statusClass = p.pagado ? 'status-pagado' : 'status-pendiente';
            const statusText = p.pagado ? 'Pagado' : 'Pendiente';

            card.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div class="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl font-bold text-white border border-white/20">
                        ${p.nombre.charAt(0).toUpperCase()}
                    </div>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>

                <h2 class="text-xl font-bold text-white mb-1 capitalize">${p.nombre}</h2>
                <div class="space-y-3 mt-4">
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-400 italic">Comida:</span>
                        <span class="text-slate-100 font-medium">${p.comida}</span>
                    </div>
                    ${p.extra ? `
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-400 italic">Extras:</span>
                        <span class="text-blue-300 font-medium">${p.extra}</span>
                    </div>` : ''}
                    <div class="flex justify-between text-sm border-b border-white/10 pb-3">
                        <span class="text-slate-400 italic">Bebida:</span>
                        <span class="text-slate-100 font-medium">${p.bebida}</span>
                    </div>
                    <div class="flex justify-between items-center pt-2">
                        <span class="text-lg font-semibold text-slate-300">Total</span>
                        <span class="text-2xl font-black text-white tracking-tight">$${p.total.toFixed(2)}</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading datos:', error);
        container.innerHTML = '<p class="text-red-400">Error al cargar los datos. Abre este archivo con un servidor local.</p>';
    }
}

loadDatos();

function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = 'auto';
    }
});
