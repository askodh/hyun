document.addEventListener('DOMContentLoaded', function() {
    // 메뉴 아이템에 이벤트 리스너 추가
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 형제 요소인 submenu 찾기
            const submenu = this.nextElementSibling;
            
            // submenu가 있는 경우 토글
            if (submenu && submenu.classList.contains('submenu')) {
                // 이미 표시되어 있는지 확인
                const isVisible = submenu.style.display !== 'none';
                
                // submenu 토글
                submenu.style.display = isVisible ? 'none' : 'block';
                
                // 메뉴 아이템에 active 클래스 토글
                this.classList.toggle('active', !isVisible);
            }
        });
    });
    
    // 서브메뉴 아이템에 이벤트 리스너 추가
    const submenuItems = document.querySelectorAll('.submenu a');
    
    submenuItems.forEach(item => {
        // 하위 메뉴가 있는 경우에만 이벤트 추가
        if (item.nextElementSibling && item.nextElementSibling.classList.contains('sub-submenu')) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 형제 요소인 sub-submenu 찾기
                const subSubmenu = this.nextElementSibling;
                
                // 이미 표시되어 있는지 확인
                const isVisible = subSubmenu.style.display !== 'none';
                
                // sub-submenu 토글
                subSubmenu.style.display = isVisible ? 'none' : 'block';
                
                // 메뉴 아이템에 active 클래스 토글
                this.classList.toggle('active', !isVisible);
            });
        }
    });
    
    // 검색 기능 구현
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) return;
        
        alert('검색 기능: "' + searchTerm + '"에 대한 검색 결과를 표시합니다.');
        // 실제 검색 기능은 여기에 구현
    }
    
    // 키보드 단축키 Ctrl+K 구현
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // 페이지 로드 시 모든 서브메뉴 숨기기
    const submenus = document.querySelectorAll('.submenu, .sub-submenu');
    submenus.forEach(menu => {
        menu.style.display = 'none';
    });
}); 