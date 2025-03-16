document.getElementById("applyButton").addEventListener("click", async function () {
    const imageContainer = document.getElementById("imageContainer");
    
    // 기존 이미지 초기화
    imageContainer.innerHTML = "";

    const baseUrl = "https://images.unsplash.com/photo-1609153627650-195f0cc93210";

    let w = 8000; // 초기 width 값

    const imagePromises = [];

    for (let i = 0; i < 100; i++) { // 100개의 이미지 로드
        const img = document.createElement("img");
        img.src = `${baseUrl}?w=${w + i}&fm=jpeg&q=100`;
      
        imageContainer.appendChild(img);

        // 비동기적으로 디코딩
        const imgPromise = img.decode();

        imagePromises.push(imgPromise);

        // w++; // w 증가
    }

    // 모든 이미지 디코딩이 완료될 때까지 기다림
    await Promise.all(imagePromises);
});
