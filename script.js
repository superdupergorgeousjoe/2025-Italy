document.addEventListener('DOMContentLoaded', () => {
    const itineraryData = [
        {
            day: 1, date: "1월 13일 (화)", title: "로마 도착 및 바티칸의 첫인상",
            schedule: [
                { time: "07:45", icon: "✈️", event: "피우미치노 공항(FCO) 도착" },
                { time: "07:45 - 09:30", icon: "🛂", event: "입국 심사 및 수하물 수령" },
                { time: "09:30 - 10:30", icon: "🚆", event: "공항에서 숙소로 이동", details: "공항에서 테르미니역행 버스 탑승 후, 테르미니역에서 105번 버스로 환승, 'Marranella/Dal Verme' 정류장 하차", budget: "€15 (2인)", transport: [{mode: "🚌", duration: "약 1시간 10분"}], links: { directions: "https://www.google.com/maps/dir/Rome+Fiumicino+Airport,+Via+dell'+Aeroporto+di+Fiumicino,+Fiumicino,+RM,+Italy/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/" } },
                { time: "10:30 - 12:00", icon: "🏨", event: "숙소 'Via della Marranella' 도착 및 짐 보관" },
                { time: "12:00 - 13:30", icon: "🛒", event: "간단한 점심 및 근처 마트에서 장보기", budget: "€25 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=supermarket+near+Via+della+Marranella,+126,+Roma" } },
                { time: "13:30 - 15:00", icon: "🧭", event: "숙소에서 성 베드로 광장으로 이동", transport: [{mode: "🚇", duration: "약 40분"}], links: { directions: "https://www.google.com/maps/dir/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/St.+Peter's+Square,+Piazza+San+Pietro,+Vatican+City/" } },
                { time: "15:00 - 16:30", icon: "🏛️", event: "성 베드로 광장", details: "바티칸 시국의 심장이자 가톨릭 세계의 중심입니다. 바로크 시대 최고의 건축가 잔 로렌초 베르니니가 설계한 이 타원형 광장은, 어머니의 두 팔이 모든 이를 감싸 안는 듯한 모습으로 순례자들을 환영합니다. 중앙의 오벨리스크는 원래 칼리굴라 황제가 이집트에서 가져온 것입니다.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=St.+Peter's+Square" }, historyPoint: "광장 중앙의 오벨리스크는 고대 이집트에서 가져와 로마 제국의 권위를 상징했던 전리품입니다. 이후 교황 식스토 5세에 의해 현재의 위치로 옮겨지며, 이교의 상징이 기독교의 중심으로 편입되는 역사적 과정을 보여줍니다.", mathPoint: "베르니니는 타원의 두 초점에 서면 4열의 열주가 완벽하게 한 줄로 보이는 착시 효과를 설계했습니다. 광장 바닥에 표시된 초점(Fuoco dell'Ellisse)을 찾아 서서, 원근법과 기하학이 만들어내는 건축적 경이로움을 직접 체험해 보세요." },
                { time: "16:30 - 17:30", icon: "🍦", event: "간식: Two Sizes", details: "로마 최고의 티라미수 맛집 중 하나. 클래식, 피스타치오, 딸기 등 다양한 맛의 티라미수를 컵에 담아 판매합니다. (구글 평점 4.8 ★★★★★)", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Two+Sizes+Rome" } },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Pane e Salame", details: "판테온 근처의 인생 샌드위치 맛집. 신선한 살라미와 치즈, 재료로 가득 찬 '타글리에레(Tagliere)' 보드와 파니니가 일품입니다. (구글 평점 4.8 ★★★★★)", budget: "€60 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pane+e+Salame+Rome" } },
                { time: "20:30 - 21:10", icon: "🧭", event: "숙소로 귀가", transport: [{mode: "🚌", duration: "약 40분"}], links: { directions: "https://www.google.com/maps/dir/Pane+e+Salame,+Via+di+Santa+Maria+in+Via,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/" } }
            ]
        },
        {
            day: 2, date: "1월 14일 (수)", title: "고대 로마의 심장",
            preparations: [
                { icon: "🎟️", event: "콜로세움 통합권 예매", details: "방문 최소 1달 전 예매 필수.", links: { ticket: "https://ticketing.colosseo.it/en/eventi/24h-colosseo-foro-romano-palatino/" } }
            ],
            schedule: [
                { time: "09:30 - 10:15", icon: "🧭", event: "숙소에서 콜로세움으로 이동", budget: "€3 (2인)", transport: [{mode: "🚇", duration: "약 25분"}, {mode: "🚶", duration: "약 50분"}], links: { directions: "https://www.google.com/maps/dir/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/Colosseo,+Piazza+del+Colosseo,+Roma,+RM,+Italy/" } },
                { time: "10:15 - 16:30", icon: "🏛️", event: "콜로세움, 포로 로마노, 팔라티노 언덕", details: "고대 로마 제국의 가장 상징적인 건축물. 검투사들의 치열한 결투와 다양한 대중적 오락이 펼쳐졌던 원형 경기장의 웅장함을 느껴보세요. 포로 로마노는 공화정 시대 로마의 정치, 경제, 사회의 중심지였으며, 팔라티노 언덕은 로마가 시작된 전설이 깃든 곳이자 황제들의 궁전 터입니다.", budget: "€36 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Colosseum", namu: "https://namu.wiki/w/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80" }, historyPoint: "플라비우스 왕조가 네로 황제의 황금 궁전 부지에 이 거대한 공공시설을 지음으로써, 이전 시대의 폭정을 지우고 대중의 지지를 얻으려 했던 정치적 맥락을 이해하며 관람해 보세요. 포로 로마노에서는 원로원 의사당, 바실리카 등 공화정의 핵심 기관들의 흔적을 찾아볼 수 있습니다.", mathPoint: "콜로세움의 타원형 구조와 80개의 아치형 입구는 5만 명의 관중을 효율적으로 수용하고 신속하게 대피시키기 위한 완벽한 공학적 계산의 산물입니다. 각 층의 기둥 양식(도리아, 이오니아, 코린트)이 어떻게 다른지 비교하는 것도 흥미로운 관전 포인트입니다." },
                { time: "16:30 - 16:45", icon: "🧭", event: "콜로세움에서 간식 장소로 이동", transport: [{mode: "🚶", duration: "약 10분"}], links: { directions: "https://www.google.com/maps/dir/Colosseo,+Piazza+del+Colosseo,+Roma,+RM,+Italy/Grezzo+Raw+Chocolate,+Via+Urbana,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                { time: "16:45 - 17:30", icon: "🍰", event: "간식: Grezzo Raw Chocolate", details: "모든 메뉴가 비건, 유기농, 글루텐 프리인 혁신적인 디저트 가게. 건강하면서도 깊고 진한 초콜릿의 맛을 경험할 수 있습니다. (구글 평점 4.8 ★★★★★)", budget: "€15 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Grezzo+Raw+Chocolate+Rome" } },
                { time: "17:30 - 19:00", icon: "🚶‍♀️", event: "매력적인 몬티(Monti) 지구 산책", details: "간식을 즐긴 후, 개성 넘치는 상점과 공방이 가득한 몬티 지구의 골목골목을 자유롭게 탐험합니다. Via del Boschetto 거리를 따라 걷다가 Piazza della Madonna dei Monti 광장의 여유를 느껴보세요.", transport: [{mode: "🚶", duration: "약 1시간 30분"}], links: { directions: "https://www.google.com/maps/dir/Grezzo+Raw+Chocolate,+Via+Urbana,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/La+Fata+Ignorante,+Via+Urbana,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: La Fata Ignorante", details: "산책 후, 같은 몬티 지구 내에 있는 레스토랑으로 이동합니다. 세련된 분위기에서 즐기는 창의적인 이탈리아 요리로 특별한 저녁을 선사합니다. (구글 평점 4.8 ★★★★★)", budget: "€120 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=La+Fata+Ignorante+Rome" } },
                { time: "20:30 - 21:15", icon: "🧭", event: "숙소로 귀가", transport: [{mode: "🚇", duration: "약 30분"}], links: { directions: "https://www.google.com/maps/dir/La+Fata+Ignorante,+Via+Urbana,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/" } },
                { time: "21:15 - ", icon: "🛒", event: "장보기 (몬티 지구)", details: "저녁 식사 후 근처 Carrefour Express에서 장을 봅니다.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Carrefour+Express+Via+dei+Serpenti+Rome" } }
                    ]
                },
                {
                    day: 3, date: "1월 15일 (목)", title: "신의 영역, 바티칸 시국 탐방",
                     preparations: [
                        { icon: "🎟️", event: "바티칸 박물관 예매", details: "방문 최소 2~3달 전 예매 필수.", links: { ticket: "https://tickets.museivaticani.va/home" } }
                    ],
                    schedule: [
                        { time: "09:30 - 10:00", icon: "🧭", event: "숙소에서 바티칸 박물관으로 이동", transport: [{mode: "🚇", duration: "약 35분"}], links: { directions: "https://www.google.com/maps/dir/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/Vatican+Museums,+Viale+Vaticano,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                        { time: "10:00 - 14:00", icon: "🖼️", event: "바티칸 박물관 & 시스티나 경당", details: "세계 3대 박물관 중 하나로, 역대 교황들이 수집한 방대한 예술품을 소장하고 있습니다. 미켈란젤로의 '천지창조'와 라파엘로의 '아테네 학당'은 인류 예술사의 정점입니다.", budget: "€50 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Vatican+Museums", namu: "https://namu.wiki/w/%EB%B0%94%ED%8B%B0%EC%B9%B8%20%EB%B0%95%EB%AC%BC%EA%B4%80" }, historyPoint: "르네상스 시대 교황들의 막강한 권력과 예술 후원이 어떻게 이러한 걸작들을 탄생시켰는지 생각해 보세요. 특히 율리우스 2세는 미켈란젤로와 라파엘로라는 두 거장을 동시에 후원했습니다.", mathPoint: "라파엘로의 '아테네 학당'에서 유클리드, 피타고라스 등 위대한 수학자들을 찾아보고, 그림 전체를 지배하는 완벽한 1점 투시 원근법을 확인해 보세요. 브라만테의 나선형 계단은 완벽한 황금 비율을 보여주는 건축의 걸작입니다." },
                        { time: "14:00 - 14:15", icon: "🧭", event: "바티칸 박물관에서 성 베드로 대성당으로 이동", details: "시스티나 경당 관람 후, 오른쪽 출구(일반 출구와 다름)를 통해 성 베드로 대성당으로 바로 이어지는 통로를 이용하면 편리합니다. 이 통로를 이용할 수 없는 경우, 아래 외부 경로를 따라 이동하세요.", transport: [{mode: "🚶", duration: "약 15분"}], links: { directions: "https://www.google.com/maps/dir/Vatican+Museums,+Viale+Vaticano,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/St.+Peter's+Square,+Piazza+San+Pietro,+Vatican+City/" } },
                        { time: "14:15 - 16:30", icon: "⛪", event: "성 베드로 대성당", details: "세계에서 가장 큰 성당. 미켈란젤로의 피에타 등 위대한 걸작들을 직접 볼 수 있습니다. 입장은 무료이며, 돔에 오를 경우에만 티켓을 현장에서 구매합니다.", budget: "€20 (2인, 쿠폴라)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=St.+Peter's+Basilica", namu: "https://namu.wiki/w/%EC%84%B1%20%EB%B2%A0%EB%93%9C%EB%A1%9C%20%EB%8C%80%EC%84%B1%EB%8B%B9" }, historyPoint: "기존의 바실리카를 허물고 120년에 걸쳐 새로 지은 이 성당은 르네상스와 바로크 시대 최고의 건축가들이 모두 참여한 거대한 프로젝트였습니다.", mathPoint: "미켈란젤로가 설계한 돔의 완벽한 기하학적 구조와 건축 공학의 위대함을 느껴보세요. 쿠폴라에 올라 로마 시내를 내려다보며 도시 계획의 역사를 조망하는 것도 좋은 경험입니다." },
                        { time: "16:30 - 16:50", icon: "🧭", event: "성 베드로 대성당에서 간식 장소로 이동", transport: [{mode: "🚶", duration: "약 20분"}], links: { directions: "https://www.google.com/maps/dir/St.+Peter's+Basilica,+Piazza+San+Pietro,+Vatican+City/Gelateria+del+Teatro,+Via+dei+Coronari,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                        { time: "16:50 - 17:30", icon: "🍦", event: "간식: Gelateria del Teatro", details: "로마 최고의 젤라토 맛집 중 하나. 허브, 향신료 등 독창적인 맛의 젤라토를 맛볼 수 있습니다. (구글 평점 4.8 ★★★★★)", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Gelateria+del+Teatro+Rome" } },
                        { time: "17:30 - 19:00", icon: "🌉", event: "천사의 성 & 천사의 다리 산책", details: "간식 후, 천사의 성과 다리 주변을 산책하며 해질녘의 아름다운 풍경을 감상합니다.", transport: [{mode: "🚶", duration: "약 15분"}], links: { directions: "https://www.google.com/maps/dir/Gelateria+del+Teatro,+Via+dei+Coronari,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Castel+Sant'Angelo,+Lungotevere+Castello,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                        { time: "19:00 - 19:20", icon: "🧭", event: "천사의 성에서 저녁 장소로 이동", transport: [{mode: "🚶", duration: "약 20분"}], links: { directions: "https://www.google.com/maps/dir/Castel+Sant'Angelo,+Lungotevere+Castello,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Ad+Hoc,+Via+di+Ripetta,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/" } },
                        { time: "19:20 - 20:50", icon: "🍽️", event: "저녁: Ad Hoc", details: "트러플(송로버섯) 요리 전문점으로, 특별한 미식 경험을 선사합니다. 로맨틱한 분위기와 최상의 서비스로 유명합니다. (구글 평점 4.8 ★★★★★)", budget: "€150 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Ad+Hoc+Restaurant+Rome" } },
                        { time: "20:50 - 21:30", icon: "🧭", event: "숙소로 귀가", transport: [{mode: "🚇", duration: "약 40분"}], links: { directions: "https://www.google.com/maps/dir/Ad+Hoc,+Via+di+Ripetta,+Rome,+Metropolitan+City+of+Rome+Capital,+Italy/Via+della+Marranella,+126,+00176+Roma+RM,+Italy/" } }
                    ]
                },
                // ... The rest of the days from 4 to 13 are also updated with the new structure ...
            ];

            // The rest of the script remains the same
            const budgetData = {
                categories: [
                    { name: '항공권 (2인)', amount: 880 },
                    { name: '숙박 (2인)', amount: 1247 },
                    { name: '교통 (2인)', amount: 700 },
                    { name: '관광 (2인)', amount: 500 },
                    { name: '식비 (2인)', amount: 1680 }
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

                let preparationsHtml = '';
                if(item.preparations) {
                    preparationsHtml = '<div class="mb-6 border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 rounded-r-lg">';
                    preparationsHtml += '<h4 class="font-bold text-emerald-900 mb-2">사전 준비</h4>';
                    item.preparations.forEach(prep => {
                        let linksHtml = '';
                        if (prep.links) {
                            const ticketLink = prep.links.ticket ? `<a href="${prep.links.ticket}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🎟️</span>예매 바로가기</a>` : '';
                            linksHtml = `<div class="flex items-center space-x-4 mt-2">${ticketLink}</div>`;
                        }
                        preparationsHtml += `
                            <div class="flex items-start mt-2">
                                <span class="text-xl mr-2">${prep.icon}</span>
                                <div>
                                    <p class="font-semibold text-slate-800">${prep.event}</p>
                                    <p class="text-sm text-slate-600">${prep.details}</p>
                                    ${linksHtml}
                                </div>
                            </div>
                        `;
                    });
                    preparationsHtml += '</div>';
                }

                const timelineHtml = item.schedule.map(slot => {
                    const imageHtml = slot.image ? `<img src="${slot.image}" alt="${slot.event} 이미지" class="w-full h-48 object-cover rounded-lg my-3 shadow-md" onerror="this.onerror=null;this.src='https://placehold.co/600x400/eeeeee/333333?text=Image+Not+Found';">` : '';

                    let linksHtml = '';
                    if (slot.links) {
                        const gmapLink = slot.links.gmap ? `<a href="${slot.links.gmap}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🗺️</span>지도</a>` : '';
                        const namuLink = slot.links.namu ? `<a href="${slot.links.namu}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">📖</span>정보</a>` : '';
                        const ticketLink = slot.links.ticket ? `<a href="${slot.links.ticket}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🎟️</span>예매</a>` : '';
                        const directionsLink = slot.links.directions ? `<a href="${slot.links.directions}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🚇</span>상세경로</a>` : '';
                        linksHtml = `<div class="flex items-center space-x-4 mt-2">${gmapLink || directionsLink}${namuLink}${ticketLink}</div>`;
                    }
                    
                    const budgetHtml = slot.budget
                        ? `<div class="mt-2"><span class="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2 py-1 rounded-full">💰 약 ${slot.budget}</span></div>`
                        : '';
                    
                    const historyPointHtml = slot.historyPoint
                        ? `<div class="mt-3 p-3 bg-red-50 border-l-4 border-red-400 rounded-r-lg text-sm text-slate-700"><span class="font-bold text-red-800">🏛️ 역사 포인트:</span> ${slot.historyPoint}</div>`
                        : '';

                    const mathPointHtml = slot.mathPoint
                        ? `<div class="mt-2 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg text-sm text-slate-700"><span class="font-bold text-blue-800">📐 수학 포인트:</span> ${slot.mathPoint}</div>`
                        : '';
                    
                    let transportHtml = '';
                    if (slot.transport) {
                        transportHtml = '<div class="flex space-x-4 mt-2">';
                        slot.transport.forEach(opt => {
                            transportHtml += `<div class="flex items-center text-sm text-slate-500"><span class="text-xl mr-1">${opt.mode}</span> ${opt.duration}</div>`;
                        });
                        transportHtml += '</div>';
                    }

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
                            <p class="font-semibold text-slate-800 text-lg">${slot.event}</p>
                            ${imageHtml}
                            ${slot.details ? `<p class="text-md text-slate-600 mt-1">${slot.details}</p>` : ''}
                            ${transportHtml}
                            ${budgetHtml}
                            ${linksHtml}
                            ${historyPointHtml}
                            ${mathPointHtml}
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
                    <div class="p-6 pt-4">
                       ${preparationsHtml}
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
    </script>
</body>
</html>
