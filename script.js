document.addEventListener('DOMContentLoaded', () => {
    const itineraryData = [
        {
            day: 1, date: "1월 13일 (화)", title: "로마 도착 및 바티칸의 첫인상",
            schedule: [
                { time: "07:45", icon: "✈️", event: "피우미치노 공항(FCO) 도착" },
                { time: "07:45 - 09:30", icon: "🛂", event: "입국 심사 및 수하물 수령" },
                { time: "09:30 - 10:30", icon: "🚆", event: "공항에서 숙소로 이동", details: "FL1 → 트라스테베레 환승 → FL3/FL5 탑승 → 로마 산 피에트로역 하차", budget: "€16 (2인)" },
                { time: "10:30 - 12:00", icon: "🏨", event: "숙소 'Discovering Rome' 도착 및 짐 보관" },
                { time: "12:00 - 13:30", icon: "🛒", event: "간단한 점심 및 근처 마트에서 장보기", budget: "€25 (2인)" },
                { time: "13:30 - 16:00", icon: "🏛️", event: "성 베드로 광장", details: "베르니니가 설계한 타원형 광장의 기하학적 아름다움을 느껴보세요.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=St.+Peter's+Square" } },
                { time: "16:00 - 17:00", icon: "🔑", event: "숙소 체크인 및 휴식" },
                { time: "17:00 - 18:00", icon: "🍦", event: "간식: Hedera - Gelato & Caffè", details: "구글 평점 4.7 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Hedera+Gelato+Rome" } },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Ristorante Arlù", details: "구글 평점 4.7 ★★★★★", budget: "€80 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Ristorante+Arlù+Rome" } },
            ]
        },
        {
            day: 2, date: "1월 14일 (수)", title: "고대 로마의 심장",
            preparations: [
                { icon: "🎟️", event: "콜로세움 통합권 예매", details: "방문 최소 1달 전 예매 필수.", links: { ticket: "https://www.coopculture.it/en/poi/colosseum/" } }
            ],
            schedule: [
                { time: "09:30 - 10:15", icon: "🚌", event: "숙소에서 베네치아 광장으로 이동 (64번 버스)", budget: "€3 (2인)" },
                { time: "10:15 - 16:30", icon: "🏛️", event: "콜로세움, 포로 로마노, 팔라티노 언덕", details: "고대 로마의 중심지를 탐방합니다.", budget: "€36 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Colosseum", namu: "https://namu.wiki/w/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80" }, interest: "콜로세움의 아치 구조와 같은 로마의 경이로운 건축 공학 기술을 직접 확인해 보세요." },
                { time: "16:30 - 17:30", icon: "🍰", event: "간식: La Casetta a Monti", details: "구글 평점 4.6 ★★★★★", budget: "€15 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=La+Casetta+a+Monti+Rome" } },
                { time: "17:30 - 19:00", icon: "🚶‍♀️", event: "매력적인 몬티(Monti) 지구 산책" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Ai Tre Scalini", details: "구글 평점 4.5 ★★★★★", budget: "€90 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Ai+Tre+Scalini+Rome" } },
            ]
        },
        {
            day: 3, date: "1월 15일 (목)", title: "신의 영역, 바티칸 시국 탐방",
             preparations: [
                { icon: "🎟️", event: "바티칸 박물관 예매", details: "방문 최소 2~3달 전 예매 필수.", links: { ticket: "https://tickets.museivaticani.va/home" } }
            ],
            schedule: [
                { time: "10:00 - 14:00", icon: "🖼️", event: "바티칸 박물관 & 시스티나 경당", details: "인류 최고의 예술품을 감상합니다.", budget: "€50 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Vatican+Museums", namu: "https://namu.wiki/w/%EB%B0%94%ED%8B%B0%EC%B9%B8%20%EB%B0%95%EB%AC%BC%EA%B4%80" }, interest: "라파엘로의 '아테네 학당'에서 유클리드, 피타고라스 등 위대한 수학자들을 찾아보고, '지도의 방'에서 옛 지도 제작에 담긴 수학적 원리를 느껴보세요." },
                { time: "15:00 - 17:00", icon: "⛪", event: "성 베드로 대성당", details: "미켈란젤로의 피에타 감상. 쿠폴라 등반 시 추가 비용 발생", budget: "€20 (2인, 쿠폴라)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=St.+Peter's+Basilica", namu: "https://namu.wiki/w/%EC%84%B1%20%EB%B2%A0%EB%93%9C%EB%A1%9C%20%EB%8C%80%EC%84%B1%EB%8B%B9" }, interest: "미켈란젤로가 설계한 돔의 완벽한 기하학적 구조와 건축 공학의 위대함을 느껴보세요." },
                { time: "17:00 - 18:00", icon: "🍰", event: "간식: Pasticceria Flego", details: "구글 평점 4.8 ★★★★★", budget: "€14 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pasticceria+Flego+Rome" } },
                { time: "18:00 - 19:00", icon: "🌉", event: "천사의 성 앞, 천사의 다리 산책" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Trattoria Da Luigi", details: "구글 평점 4.5 ★★★★★", budget: "€70 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Luigi+Rome" } },
            ]
        },
        {
            day: 4, date: "1월 16일 (금)", title: "[근교] 르네상스의 요람, 피렌체",
            preparations: [
                { icon: "🎟️", event: "피렌체행 고속열차 예매", details: "Trenitalia 또는 Italo에서 미리 예매할수록 저렴합니다.", links: { ticket: "https://www.trenitalia.com/en.html" } },
                { icon: "🎟️", event: "우피치 미술관 예매", details: "방문 최소 1달 전 예매 필수.", links: { ticket: "https://www.b-ticket.com/b-Ticket/uffizi/" } }
            ],
            schedule: [
                { time: "09:00 - 10:35", icon: "🚆", event: "고속열차로 피렌체 이동 (로마 → 피렌체)", budget: "€100 (2인, 왕복)" },
                { time: "11:00 - 13:30", icon: "🖼️", event: "우피치 미술관", details: "르네상스 회화의 정수를 만납니다.", budget: "€50 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Uffizi+Gallery", namu: "https://namu.wiki/w/%EC%9A%B0%ED%94%BC%EC%B9%98%20%EB%AF%B8%EC%88%A0%EA%B4%80" }, interest: "레오나르도 다빈치의 작품들에서 예술과 과학, 수학의 조화를 감상해 보세요." },
                { time: "13:30 - 14:30", icon: "🌉", event: "베키오 다리 산책 및 점심", budget: "€30 (2인)" },
                { time: "14:30 - 16:30", icon: "🔭", event: "갈릴레오 박물관 (선택)", details: "과학과 수학에 관심 있다면 피티 궁전 대신 방문하기 좋은 곳입니다.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Galileo+Museum+Florence" } },
                { time: "16:30 - 17:30", icon: "🥪", event: "간식: All'Antico Vinaio", details: "구글 평점 4.6 ★★★★★", budget: "€20 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=All'Antico+Vinaio+Florence" } },
                { time: "19:25 - 21:00", icon: "🚆", event: "고속열차로 로마 복귀" },
                { time: "21:00 - 21:30", icon: "🍽️", event: "저녁: Mercato Centrale Roma", details: "테르미니역 푸드코트. 구글 평점 4.4 ★★★★☆", budget: "€40 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Mercato+Centrale+Roma" } },
            ]
        },
        {
            day: 5, date: "1월 17일 (토)", title: "[근교] 하늘 위의 도시, 오르비에토 & 치비타",
            preparations: [
                { icon: "🎟️", event: "오르비에토행 기차 예매", details: "지역열차(Regionale)는 현장 발권도 가능합니다.", links: { ticket: "https://www.trenitalia.com/en.html" } }
            ],
            schedule: [
                { time: "09:58 - 11:15", icon: "🚆", event: "지역열차로 오르비에토 이동", budget: "€36 (2인, 왕복)" },
                { time: "11:45 - 14:30", icon: "🏞️", event: "'죽어가는 도시' 치비타 디 반뇨레죠", budget: "€20 (2인, 버스+입장료)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Civita+di+Bagnoregio", namu: "https://namu.wiki/w/%EC%B9%98%EB%B9%84%ED%83%80%EB%94%94%EB%B0%98%EB%87%A8%EB%A0%88%EC%A3%A0" } },
                { time: "15:30 - 17:00", icon: "⛪", event: "오르비에토 대성당", details: "예매는 보통 불필요하며, 현장 구매 가능합니다.", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Orvieto+Cathedral", namu: "https://namu.wiki/w/%EC%98%A4%EB%A5%B4%EB%B9%84%EC%97%90%ED%86%A0%20%EB%8C%80%EC%84%B1%EB%8B%B9" } },
                { time: "17:00 - 17:30", icon: "🍦", event: "간식: Gelateria Pasqualetti", details: "구글 평점 4.7 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Gelateria+Pasqualetti+Orvieto" } },
                { time: "18:52 - 20:15", icon: "🚆", event: "지역열차로 로마 복귀" },
                { time: "20:15 - 21:00", icon: "🍽️", event: "저녁: Trattoria Dell'Omo", details: "구글 평점 4.5 ★★★★★", budget: "€60 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Trattoria+Dell'Omo+Rome" } },
            ]
        },
        {
            day: 6, date: "1월 18일 (일)", title: "로마의 예술과 낭만",
            preparations: [
                { icon: "🎟️", event: "보르게세 미술관 예약", details: "전화 또는 온라인 예약 필수! 관람 인원이 엄격히 제한됩니다.", links: { ticket: "https://www.tosc.it/en/artist/galleria-borghese/" } }
            ],
            schedule: [
                { time: "11:00 - 13:00", icon: "🖼️", event: "보르게세 미술관", details: "베르니니의 걸작들을 만나는 시간.", budget: "€30 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Borghese+Gallery+and+Museum", namu: "https://namu.wiki/w/%EB%B3%B4%EB%A5%B4%EA%B2%8C%EC%84%B8%20%EB%AF%B8%EC%88%A0%EA%B4%80" } },
                { time: "13:00 - 14:30", icon: "🌳", event: "보르게세 공원 산책" },
                { time: "15:30 - 16:30", icon: "🍰", event: "간식: Pompi Tiramisù", details: "'티라미수의 왕'. 구글 평점 4.5 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pompi+Tiramisù+Rome" } },
                { time: "16:30 - 19:00", icon: "🚶‍♀️", event: "트라스테베레 지구 탐방" },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Trattoria Da Enzo al 29", details: "구글 평점 4.5 ★★★★★", budget: "€80 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Enzo+al+29+Rome" } },
            ]
        },
        {
            day: 7, date: "1월 19일 (월)", title: "[근교] 시간이 멈춘 도시, 폼페이",
            preparations: [
                { icon: "🎟️", event: "나폴리행 고속열차 예매", details: "Trenitalia 또는 Italo에서 예매", links: { ticket: "https://www.trenitalia.com/en.html" } },
                { icon: "🎟️", event: "폼페이 유적지 예매", details: "공식 예매처에서 미리 예약하세요.", links: { ticket: "https://www.ticketone.it/en/artist/scavi-pompei/" } }
            ],
            schedule: [
                { time: "08:25 - 09:35", icon: "🚆", event: "고속열차로 나폴리 이동 (로마 → 나폴리)", budget: "€90 (2인, 왕복)" },
                { time: "09:35 - 10:30", icon: "🚈", event: "치르쿰베수비아나 사철로 폼페이 이동", budget: "€12 (2인, 왕복)" },
                { time: "10:30 - 16:00", icon: "🏛️", event: "폼페이 고고학 공원", details: "화산재 속에서 부활한 고대 도시 탐험.", budget: "€44 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Archaeological+Park+of+Pompeii", namu: "https://namu.wiki/w/%ED%8F%BC%ED%8E%98%EC%9D%B4" } },
                { time: "17:00 - 17:30", icon: "🥐", event: "간식(나폴리): Sfogliatelle Attanasio", details: "구글 평점 4.6 ★★★★★", budget: "€8 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Sfogliatelle+Attanasio+Naples" } },
                { time: "17:30 - 18:40", icon: "🚆", event: "고속열차로 로마 복귀" },
                { time: "19:30 - 21:00", icon: "🍽️", event: "저녁: Mamma Angela Trattoria", details: "구글 평점 4.7 ★★★★★", budget: "€70 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Mamma+Angela+Trattoria+Rome" } },
            ]
        },
        {
            day: 8, date: "1월 20일 (화)", title: "[근교] 황제와 추기경의 정원, 티볼리",
             preparations: [
                { icon: "🎟️", event: "티볼리 빌라 통합권 예매", details: "Villa Adriana와 Villa d'Este를 함께 예매할 수 있습니다.", links: { ticket: "https://www.coopculture.it/en/poi/tivoli-villa-adriana-e-villa-d-este/" } }
            ],
            schedule: [
                { time: "09:30 - 10:30", icon: "🚆", event: "기차/버스로 티볼리 이동", budget: "€12 (2인, 왕복)" },
                { time: "10:30 - 13:30", icon: "🏛️", event: "하드리아누스 황제의 별장", budget: "€24 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Villa+Adriana", namu: "https://namu.wiki/w/%ED%95%98%EB%93%9C%EB%A6%AC%EC%95%84%EB%88%84%EC%8A%A4%20%EB%B3%84%EC%9E%A5" } },
                { time: "14:30 - 16:30", icon: "⛲", event: "빌라 데스테", details: "바로크 정원 예술의 극치", budget: "€30 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Villa+d'Este", namu: "https://namu.wiki/w/%EB%B9%8C%EB%9D%BC%20%EB%8D%B0%EC%8A%A4%ED%85%8C" } },
                { time: "16:30 - 17:00", icon: "🍰", event: "간식: Pasticceria De Quintili", details: "구글 평점 4.5 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pasticceria+De+Quintili+Tivoli" } },
                { time: "19:30 - 21:00", icon: "🍽️", event: "저녁: Il Sorpasso", details: "프라티 지구의 인기 맛집. 구글 평점 4.5 ★★★★★", budget: "€100 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Il+Sorpasso+Rome" } },
            ]
        },
        {
            day: 9, date: "1월 21일 (수)", title: "로마의 고대 항구, 오스티아 안티카",
            preparations: [
                { icon: "🎟️", event: "카피톨리니 미술관 예매", details: "공식 예매처에서 미리 예약하세요.", links: { ticket: "https://museiincomuneroma.vivaticket.it/" } }
            ],
            schedule: [
                { time: "09:30 - 10:30", icon: "🚈", event: "로마-리도 열차로 오스티아 안티카 이동", budget: "€3 (2인)" },
                { time: "10:30 - 14:00", icon: "🏛️", event: "오스티아 안티카 고고학 공원", details: "고대 로마 서민들의 삶을 생생하게 엿볼 수 있는 곳", budget: "€24 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Ostia+Antica", namu: "https://namu.wiki/w/%EC%98%A4%EC%8A%A4%ED%8B%B0%EC%95%84" }, interest: "상점과 길드 사무소 바닥에 남아있는 정교한 기하학적 패턴의 모자이크를 찾아보세요." },
                { time: "15:00 - 17:30", icon: "🖼️", event: "카피톨리니 미술관", details: "세계 최초의 공공 미술관", budget: "€30 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Capitoline+Museums", namu: "https://namu.wiki/w/%EC%B9%B4%ED%94%BC%ED%86%A8%EB%A6%AC%EB%85%B8%20%EC%96%B8%EB%8D%95" } },
                { time: "17:30 - 18:00", icon: "🍪", event: "간식: Forno Boccione", details: "유대인 지구의 특별한 간식. 구글 평점 4.5 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Forno+Boccione+Rome" } },
                { time: "19:00 - 20:30", icon: "🍽️", event: "저녁: Nonna Betta", details: "로마-유대 전통 요리. 구글 평점 4.4 ★★★★☆", budget: "€80 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Nonna+Betta+Rome" } },
            ]
        },
        {
            day: 10, date: "1월 22일 (목)", title: "[근교] 중세의 자부심, 시에나",
            preparations: [
                { icon: "🎟️", event: "시에나행 버스 예매", details: "Flixbus 또는 Itabus에서 예매 가능합니다.", links: { ticket: "https://www.flixbus.com/" } },
                { icon: "🎟️", event: "시에나 대성당 통합권 예매", details: "Opa Si Pass 통합권 예매를 추천합니다.", links: { ticket: "https://operalaboratori.vivaticket.it/en/tour/siena-cathedral-complex/2349" } }
            ],
            schedule: [
                { time: "09:00 - 12:00", icon: "🚌", event: "버스로 시에나 이동 (로마 → 시에나)", budget: "€60 (2인, 왕복)" },
                { time: "12:00 - 13:30", icon: "🏞️", event: "캄포 광장 탐방 및 점심", budget: "€40 (2인)" },
                { time: "13:30 - 15:00", icon: "⛪", event: "시에나 대성당", budget: "€20 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Siena+Cathedral", namu: "https://namu.wiki/w/%EC%8B%9C%EC%97%90%EB%82%98%20%EB%8C%80%EC%84%B1%EB%8B%B9" } },
                { time: "16:30 - 17:00", icon: "🍪", event: "간식: Pasticceria Nannini", details: "시에나 전통 과자. 구글 평점 4.3 ★★★★☆", budget: "€12 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pasticceria+Nannini+Siena" } },
                { time: "18:00 - 21:00", icon: "🚌", event: "버스로 로마 복귀" },
                { time: "21:00 - 21:45", icon: "🍽️", event: "저녁: Pizzeria L'Arciere", details: "구글 평점 4.6 ★★★★★", budget: "€50 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pizzeria+L'Arciere+Rome" } },
            ]
        },
        {
            day: 11, date: "1월 23일 (금)", title: "[근교] 평화의 도시, 아시시",
            schedule: [
                { time: "09:19 - 11:25", icon: "🚆", event: "지역열차로 아시시 이동", budget: "€40 (2인, 왕복)" },
                { time: "11:45 - 14:00", icon: "⛪", event: "성 프란체스코 대성당", details: "조토의 프레스코화 등 중세 미술의 보고. 입장은 무료입니다.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Basilica+of+Saint+Francis+of+Assisi", namu: "https://namu.wiki/w/%EC%84%B1%20%ED%94%84%EB%9E%80%EC%B2%B4%EC%8A%A4%EC%BD%94%20%EB%8C%80%EC%84%B1%EB%8B%B9" } },
                { time: "15:00 - 17:00", icon: "🚶‍♀️", event: "아시시 구시가지 산책" },
                { time: "17:00 - 17:30", icon: "🍰", event: "간식: Pasticceria Sensi", details: "구글 평점 4.6 ★★★★★", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pasticceria+Sensi+Assisi" } },
                { time: "18:55 - 21:05", icon: "🚆", event: "기차로 로마 복귀" },
                { time: "21:05 - 21:45", icon: "🍽️", event: "저녁: Armando al Pantheon", details: "예약 필수! 최고의 로마 레스토랑.", budget: "€120 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Armando+al+Pantheon+Rome", ticket: "https://armandoalpantheon.it/en/" } },
            ]
        },
        {
            day: 12, date: "1월 24일 (토)", title: "로마에서의 마지막 하루",
            schedule: [
                { time: "10:00 - 13:00", icon: "🏛️", event: "판테온", details: "모든 신을 위한 신전. 인류 역사상 가장 위대한 건축물 중 하나입니다.", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Pantheon+Rome", namu: "https://namu.wiki/w/%ED%8C%90%ED%85%8C%EC%98%A8" }, interest: "거대한 돔의 완벽한 구형 구조와 천장의 오쿨루스가 만들어내는 빛의 움직임을 통해 고대 로마의 기하학과 건축 기술의 정점을 느껴보세요." },
                { time: "14:00 - 17:00", icon: "🛍️", event: "마지막 쇼핑 및 선물 구입" },
                { time: "17:00 - 17:30", icon: "☕", event: "간식: Sant' Eustachio Il Caffè", details: "로마 3대 커피. 구글 평점 4.3 ★★★★☆", budget: "€10 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Sant'+Eustachio+Il+Caffè+Rome" } },
                { time: "19:00 - 20:30", icon: "🍽️", event: "마지막 저녁: Osteria dell'Anima", details: "구글 평점 4.6 ★★★★★", budget: "€100 (2인)", links: { gmap: "https://www.google.com/maps/search/?api=1&query=Osteria+dell'Anima+Rome" } },
                { time: "20:30 - ", icon: "🧳", event: "숙소 복귀 후 짐 정리" },
            ]
        },
        {
            day: 13, date: "1월 25일 (일)", title: "로마를 떠나며",
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
            { name: '숙박 (2인)', amount: 1920 },
            { name: '교통 (2인)', amount: 700 },
            { name: '관광 (2인)', amount: 500 },
            { name: '식비 (2인)', amount: 1440 }
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
            let linksHtml = '';
            if (slot.links) {
                const gmapLink = slot.links.gmap ? `<a href="${slot.links.gmap}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🗺️</span>지도</a>` : '';
                const namuLink = slot.links.namu ? `<a href="${slot.links.namu}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">📖</span>정보</a>` : '';
                const ticketLink = slot.links.ticket ? `<a href="${slot.links.ticket}" target="_blank" rel="noopener noreferrer" class="flex items-center text-sm text-slate-600 hover:text-emerald-700 transition-colors"><span class="text-lg mr-1">🎟️</span>예매</a>` : '';
                linksHtml = `<div class="flex items-center space-x-4 mt-2">${gmapLink}${namuLink}${ticketLink}</div>`;
            }
            
            const budgetHtml = slot.budget
                ? `<div class="mt-2"><span class="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2 py-1 rounded-full">💰 약 ${slot.budget}</span></div>`
                : '';
            
            const interestHtml = slot.interest
                ? `<div class="mt-3 p-3 bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg text-sm text-slate-700"><span class="font-bold text-indigo-800">💡 수학 & 역사 포인트:</span> ${slot.interest}</div>`
                : '';

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
                    ${slot.details ? `<p class="text-md text-slate-600 mt-1">${slot.details}</p>` : ''}
                    ${budgetHtml}
                    ${linksHtml}
                    ${interestHtml}
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
