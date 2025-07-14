document.addEventListener('DOMContentLoaded', () => {
    const itineraryData = [
        {
            day: 1, date: "1월 13일 (화)", title: "로마 도착 및 바티칸의 첫인상",
            schedule: [
                { time: "07:45", icon: "✈️", event: "피우미치노 공항(FCO) 도착" },
                { time: "07:45 - 09:30", icon: "🛂", event: "입국 심사 및 수하물 수령" },
                { time: "09:30 - 10:30", icon: "🚆", event: "공항에서 숙소로 이동", details: "FL1 → 트라스테베레 환승 → FL3/FL5 탑승 → 로마 산 피에트로역 하차" },
                { time: "10:30 - 12:00", icon: "🏨", event: "숙소 'Discovering Rome' 도착 및 짐 보관" },
                { time: "12:00 - 13:30", icon: "🛒", event: "간단한 점심 및 근처 마트에서 장보기" },
                { time: "13:30 - 16:00", icon: "🏛️", event: "성 베드로 광장 (Piazza San Pietro) 산책" },
                { time: "16:00 - 17:00", icon: "🔑", event: "숙소 체크인 및 휴식" },
                { time: "17:00 - 18:00", icon: "🍦", event: "간식: Hedera - Gelato & Caffè", details: "구글 평점 4.7 ★★★★★", link: "https://maps.app.goo.gl/BjszH1pWq9Qe29zQ8" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Ristorante Arlù", details: "구글 평점 4.7 ★★★★★", link: "https://maps.app.goo.gl/sYqXh4QkS7L6yY7E7" },
            ]
        },
        {
            day: 2, date: "1월 14일 (수)", title: "고대 로마의 심장, 포로 로마노와 콜로세움",
            schedule: [
                { time: "09:30 - 10:15", icon: "🚌", event: "숙소에서 베네치아 광장으로 이동 (64번 버스)" },
                { time: "10:15 - 13:30", icon: "🏛️", event: "포로 로마노 & 팔라티노 언덕 탐방", details: "고대 로마의 중심지를 거닐며 역사의 숨결을 느껴보세요." },
                { time: "14:30 - 16:30", icon: "🏛️", event: "콜로세움 탐방", details: "온라인 사전 예매 필수!" },
                { time: "16:30 - 17:30", icon: "🍰", event: "간식: La Casetta a Monti", details: "구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/Jqg6u23cKkY2d9qA6" },
                { time: "17:30 - 19:00", icon: "🚶‍♀️", event: "매력적인 몬티(Monti) 지구 산책" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Ai Tre Scalini", details: "구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/wY275eXhWkH64pA17" },
            ]
        },
        {
            day: 3, date: "1월 15일 (목)", title: "신의 영역, 바티칸 시국 탐방",
            schedule: [
                { time: "10:00 - 14:00", icon: "🖼️", event: "바티칸 박물관 & 시스티나 경당", details: "온라인 사전 예매 필수! 인류 최고의 예술품을 감상합니다." },
                { time: "15:00 - 17:00", icon: "⛪", event: "성 베드로 대성당 탐방", details: "미켈란젤로의 피에타 등 위대한 걸작들을 만나보세요." },
                { time: "17:00 - 18:00", icon: "🍰", event: "간식: Pasticceria Flego", details: "구글 평점 4.8 ★★★★★", link: "https://maps.app.goo.gl/iXw63P54Vd8pL8yv7" },
                { time: "18:00 - 19:00", icon: "🌉", event: "천사의 성 앞, 천사의 다리 산책" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Trattoria Da Luigi", details: "구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/EaQkFzW7jQo4D6FGA" },
            ]
        },
        {
            day: 4, date: "1월 16일 (금)", title: "[근교] 르네상스의 요람, 피렌체 당일치기",
            schedule: [
                { time: "09:00 - 10:35", icon: "🚆", event: "고속열차로 피렌체 이동 (로마 → 피렌체)" },
                { time: "11:00 - 13:30", icon: "🖼️", event: "우피치 미술관 관람", details: "온라인 사전 예매 필수! 르네상스 회화의 정수를 만납니다." },
                { time: "13:30 - 14:30", icon: "🌉", event: "베키오 다리 산책 및 점심" },
                { time: "14:30 - 16:30", icon: "🌳", event: "피티 궁전 또는 보볼리 정원 탐방" },
                { time: "16:30 - 17:30", icon: "🥪", event: "간식: All'Antico Vinaio", details: "구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/T47q5zMv41x51yXN9" },
                { time: "19:25 - 21:00", icon: "🚆", event: "고속열차로 로마 복귀" },
                { time: "21:00 - 21:30", icon: "🍽️", event: "저녁: Mercato Centrale Roma", details: "테르미니역 푸드코트. 구글 평점 4.4 ★★★★☆", link: "https://maps.app.goo.gl/x88VjE1F1X91Q9uQ7" },
            ]
        },
        {
            day: 5, date: "1월 17일 (토)", title: "[근교] 하늘 위의 도시, 오르비에토 & 치비타",
            schedule: [
                { time: "09:58 - 11:15", icon: "🚆", event: "지역열차로 오르비에토 이동" },
                { time: "11:45 - 14:30", icon: "🏞️", event: "버스 이동 후 '죽어가는 도시' 치비타 디 반뇨레죠 탐방" },
                { time: "15:30 - 17:00", icon: "⛪", event: "오르비에토 대성당 관람", details: "이탈리아 고딕 양식의 걸작" },
                { time: "17:00 - 17:30", icon: "🍦", event: "간식: Gelateria Pasqualetti", details: "구글 평점 4.7 ★★★★★", link: "https://maps.app.goo.gl/fE7t3FzVw5KxG2aRA" },
                { time: "18:52 - 20:15", icon: "🚆", event: "지역열차로 로마 복귀" },
                { time: "20:15 - 21:00", icon: "🍽️", event: "저녁: Trattoria Dell'Omo", details: "구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/95c8u2o7Gg9N41L96" },
            ]
        },
        {
            day: 6, date: "1월 18일 (일)", title: "로마의 예술과 낭만, 보르게세와 트라스테베레",
            schedule: [
                { time: "11:00 - 13:00", icon: "🖼️", event: "보르게세 미술관 관람", details: "전화 또는 온라인 예약 필수!" },
                { time: "13:00 - 14:30", icon: "🌳", event: "보르게세 공원 산책 및 핀초 언덕 전망 감상" },
                { time: "15:30 - 16:30", icon: "🍰", event: "간식: Pompi Tiramisù", details: "'티라미수의 왕'. 구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/U2V1D51X2y8x8qjR9" },
                { time: "16:30 - 19:00", icon: "🚶‍♀️", event: "트라스테베레 지구 탐방", details: "중세의 모습을 간직한 로맨틱한 골목길" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Trattoria Da Enzo al 29", details: "구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/gQ6k3gq4e8fC6mQ58" },
            ]
        },
        {
            day: 7, date: "1월 19일 (월)", title: "[근교] 시간이 멈춘 도시, 폼페이 유적 탐방",
            schedule: [
                { time: "08:25 - 09:35", icon: "🚆", event: "고속열차로 나폴리 이동 (로마 → 나폴리)" },
                { time: "09:35 - 10:30", icon: "🚈", event: "치르쿰베수비아나 사철로 폼페이 이동" },
                { time: "10:30 - 16:00", icon: "🏛️", event: "폼페이 고고학 공원 탐방", details: "화산재 속에서 부활한 고대 로마 도시를 깊이 있게 탐험합니다." },
                { time: "17:00 - 17:30", icon: "🥐", event: "간식(나폴리): Sfogliatelle Attanasio", details: "나폴리 명물 디저트. 구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/75wz3d5jHwz1vj8H7" },
                { time: "17:30 - 18:40", icon: "🚆", event: "고속열차로 로마 복귀" },
                { time: "19:30 - 21:00", icon: "🍽️", event: "저녁: Mamma Angela Trattoria", details: "구글 평점 4.7 ★★★★★", link: "https://maps.app.goo.gl/FkGj6j3o8b6t8jB49" },
            ]
        },
        {
            day: 8, date: "1월 20일 (화)", title: "[근교] 황제의 별장과 추기경의 정원, 티볼리",
            schedule: [
                { time: "09:30 - 10:30", icon: "🚆", event: "기차/버스로 티볼리 이동" },
                { time: "10:30 - 13:30", icon: "🏛️", event: "하드리아누스 황제의 별장(Villa Adriana) 탐방" },
                { time: "14:30 - 16:30", icon: "⛲", event: "빌라 데스테(Villa d'Este) 탐방", details: "수백개의 화려한 분수가 만드는 바로크 정원 예술의 극치" },
                { time: "16:30 - 17:00", icon: "🍰", event: "간식: Pasticceria De Quintili", details: "구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/x1v1Jv2P4K3c1a8L9" },
                { time: "19:30 - 21:00", icon: "🍽️", event: "저녁: Il Sorpasso", details: "프라티 지구의 인기 맛집. 구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/1L9wY6e8u7m9o6g28" },
            ]
        },
        {
            day: 9, date: "1월 21일 (수)", title: "로마의 고대 항구, 오스티아 안티카",
            schedule: [
                { time: "09:30 - 10:30", icon: "🚈", event: "로마-리도 열차로 오스티아 안티카 이동" },
                { time: "10:30 - 14:00", icon: "🏛️", event: "오스티아 안티카 고고학 공원 탐방", details: "고대 로마 서민들의 삶을 생생하게 엿볼 수 있는 곳" },
                { time: "15:00 - 17:30", icon: "🖼️", event: "카피톨리니 미술관 관람", details: "세계 최초의 공공 미술관" },
                { time: "17:30 - 18:00", icon: "🍪", event: "간식: Forno Boccione", details: "유대인 지구의 특별한 간식. 구글 평점 4.5 ★★★★★", link: "https://maps.app.goo.gl/x9H4v7qfQ7kF1eS17" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Nonna Betta", details: "로마-유대 전통 요리. 구글 평점 4.4 ★★★★☆", link: "https://maps.app.goo.gl/o1fQ3b9Y3kZ7m8p57" },
            ]
        },
        {
            day: 10, date: "1월 22일 (목)", title: "[근교] 중세의 자부심, 시에나 당일치기",
            schedule: [
                { time: "09:00 - 12:00", icon: "🚌", event: "버스로 시에나 이동 (로마 → 시에나)" },
                { time: "12:00 - 13:30", icon: "🏞️", event: "캄포 광장 탐방 및 점심" },
                { time: "13:30 - 15:00", icon: "⛪", event: "시에나 대성당 관람", details: "흑백 대리석의 조화가 인상적인 걸작" },
                { time: "15:00 - 16:30", icon: "🏛️", event: "푸블리코 궁전 & 만자의 탑 탐방" },
                { time: "16:30 - 17:00", icon: "🍪", event: "간식: Pasticceria Nannini", details: "시에나 전통 과자. 구글 평점 4.3 ★★★★☆", link: "https://maps.app.goo.gl/Q7L7q5o1x9q4B8f9A" },
                { time: "18:00 - 21:00", icon: "🚌", event: "버스로 로마 복귀" },
                { time: "21:00 - 21:45", icon: "🍽️", event: "저녁: Pizzeria L'Arciere", details: "구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/j3a7b1y9o4k3D6g59" },
            ]
        },
        {
            day: 11, date: "1월 23일 (금)", title: "[근교] 평화의 도시, 아시시 당일치기",
            schedule: [
                { time: "09:19 - 11:25", icon: "🚆", event: "지역열차로 아시시 이동" },
                { time: "11:45 - 14:00", icon: "⛪", event: "성 프란체스코 대성당 관람", details: "조토의 프레스코화 등 중세 미술의 보고" },
                { time: "15:00 - 17:00", icon: "🚶‍♀️", event: "아시시 구시가지 산책" },
                { time: "17:00 - 17:30", icon: "🍰", event: "간식: Pasticceria Sensi", details: "구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/f5e3Z5X4y6k7B8c9A" },
                { time: "18:55 - 21:05", icon: "🚆", event: "기차로 로마 복귀" },
                { time: "21:05 - 21:45", icon: "🍽️", event: "저녁: Armando al Pantheon", details: "예약 필수! 최고의 로마 레스토랑. 구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/G7fR7p5y4q6k8B9c7" },
            ]
        },
        {
            day: 12, date: "1월 24일 (토)", title: "로마에서의 마지막 하루, 여운과 정리",
            schedule: [
                { time: "10:00 - 13:00", icon: "🤔", event: "자유 선택 시간", details: "판테온 재방문, 카라칼라 욕장 등 아쉬웠던 곳 방문" },
                { time: "14:00 - 17:00", icon: "🛍️", event: "마지막 쇼핑 및 선물 구입" },
                { time: "17:00 - 17:30", icon: "☕", event: "간식: Sant' Eustachio Il Caffè", details: "로마 3대 커피. 구글 평점 4.3 ★★★★☆", link: "https://maps.app.goo.gl/g6h8k7B9c5fR3d4e2" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "마지막 저녁: Osteria dell'Anima", details: "구글 평점 4.6 ★★★★★", link: "https://maps.app.goo.gl/b9c7fR3d4e2g6h8k7" },
                { time: "20:30 - ", icon: "🧳", event: "숙소 복귀 후 짐 정리" },
            ]
        },
        {
            day: 13, date: "1월 25일 (일)", title: "로마를 떠나며 (Arrivederci, Roma!)",
            schedule: [
                { time: "오전", icon: "☕", event: "기상 및 마지막 카푸치노 즐기기" },
                { time: "오전", icon: "🔑", event: "비행 시간에 맞춰 숙소 체크아웃" },
                { time: "오전", icon: "🚆", event: "피우미치노 공항(FCO)으로 이동", details: "출국 4시간 전 이동 시작 권장" },
                { time: "오전", icon: "✈️", event: "공항 도착 및 출국 수속" },
            ]
        },
    ];

    const budgetData = {
        categories: [
            { name: '숙박', amount: 1500 },
            { name: '교통', amount: 350 },
            { name: '관광', amount: 250 },
            { name: '식비', amount: 780 }
        ],
        exchangeRate: 1500 
    };

    const budgetListContainer = document.getElementById('budget-list');
    let totalBudget = 0;
    budgetData.categories.forEach(cat => {
        totalBudget += cat.amount;
        const krwAmount = cat.amount * budgetData.exchangeRate;
        const budgetItem = `
            <div class="flex justify-between items-center text-lg border-b border-stone-200 py-2">
                <span class="text-slate-700">${cat.name}</span>
                <div class="text-right">
                    <span class="font-semibold text-slate-800">€${cat.amount.toLocaleString()}</span>
                    <span class="text-sm text-slate-500 ml-2">(약 ₩${krwAmount.toLocaleString()})</span>
                </div>
            </div>
        `;
        budgetListContainer.innerHTML += budgetItem;
    });

    const totalKrw = totalBudget * budgetData.exchangeRate;
    const totalBudgetItem = `
        <div class="flex justify-between items-center text-xl font-bold border-t-2 border-emerald-800 pt-3 mt-3">
            <span class="text-slate-900">총계</span>
            <div class="text-right">
                <span class="text-slate-900">€${totalBudget.toLocaleString()}</span>
                <span class="text-base text-slate-500 ml-2">(약 ₩${totalKrw.toLocaleString()})</span>
            </div>
        </div>
    `;
    budgetListContainer.innerHTML += totalBudgetItem;


    const accordionContainer = document.getElementById('accordion-container');
    itineraryData.forEach(item => {
        const isDayTrip = item.title.includes('[근교]');
        const dayTripBadge = isDayTrip ? `<span class="bg-emerald-100 text-emerald-800 text-sm font-semibold mr-3 px-3 py-1 rounded-full">근교</span>` : '';

        const timelineHtml = item.schedule.map(slot => {
            const eventHtml = slot.link 
                ? `<a href="${slot.link}" target="_blank" rel="noopener noreferrer" class="font-semibold text-emerald-800 hover:text-emerald-600 transition-colors group text-lg">${slot.event} <span class="opacity-70 group-hover:opacity-100 text-sm">🗺️</span></a>`
                : `<p class="font-semibold text-slate-800 text-lg">${slot.event}</p>`;
            
            return `
            <div class="timeline-item flex">
                <div class="flex flex-col items-center mr-4">
                    <div>
                        <div class="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full">
                            <div class="text-2xl">${slot.icon}</div>
                        </div>
                    </div>
                    <div class="w-px h-full bg-emerald-200 timeline-line"></div>
                </div>
                <div class="pb-8 w-full">
                    <p class="mb-1 text-md text-emerald-700 font-semibold">${slot.time}</p>
                    ${eventHtml}
                    ${slot.details ? `<p class="text-md text-slate-600 mt-1">${slot.details}</p>` : ''}
                </div>
            </div>
        `}).join('');

        const accordionItem = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <button class="accordion-header w-full p-5 text-left flex justify-between items-center hover:bg-stone-50 transition-colors" data-day="${item.day}">
                    <div class="flex items-center">
                         ${dayTripBadge}
                        <span class="font-bold text-xl text-slate-800">
                            ${item.day}일차: ${item.date} - ${item.title.replace('[근교] ', '')}
                        </span>
                    </div>
                    <span class="transform transition-transform duration-300">
                        <svg class="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </button>
                <div class="accordion-content">
                    <div class="p-6 pt-2">
                       ${timelineHtml}
                    </div>
                </div>
            </div>`;
        accordionContainer.innerHTML += accordionItem;
    });

    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('svg');

            if (content.classList.contains('open')) {
                content.classList.remove('open');
                arrow.parentElement.classList.remove('rotate-180');
            } else {
                document.querySelectorAll('.accordion-content.open').forEach(c => {
                    c.classList.remove('open');
                    c.previousElementSibling.querySelector('svg').parentElement.classList.remove('rotate-180');
                });
                content.classList.add('open');
                arrow.parentElement.classList.add('rotate-180');
            }
        });
    });
});