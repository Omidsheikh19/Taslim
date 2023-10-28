const chapters = [
    // { titleEn: "Chapter 1: Chapter Title in English", titleFa: "فصل ۱: عنوان فصل به زبان فارسی", url: "chapter1.html" },
    // { titleEn: "Chapter 2: Chapter Title in English", titleFa: "فصل ۲: عنوان فصل به زبان فارسی", url: "chapter2.html" },
    // { titleEn: "Chapter 3: Chapter Title in English", titleFa: "فصل ۳: عنوان فصل به زبان فارسی", url: "chapter3.html" },
    // { titleEn: "Chapter 4: Chapter Title in English", titleFa: "فصل ۴: عنوان فصل به زبان فارسی", url: "chapter4.html" },
    // { titleEn: "Chapter 5: Chapter Title in English", titleFa: "فصل ۵: عنوان فصل به زبان فارسی", url: "chapter5.html" },
    // Add URLs for other chapters in a similar format
  ];

  function switchLanguage(language) {
    const isEnglish = language === 'en';
    const englishElements = document.querySelectorAll('.en');
    const farsiElements = document.querySelectorAll('.fa');
  
    englishElements.forEach(element => {
      element.style.display = isEnglish ? 'block' : 'none';
    });
  
    farsiElements.forEach(element => {
      element.style.display = isEnglish ? 'none' : 'block';
    });
  }  
  
  function generateChaptersList() {
    const chaptersList = document.getElementById('chapters-list');
  
    chapters.forEach((chapter, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="#" onclick="showChapter('${chapter.url}')">${chapter.titleEn}</a>`;
      chaptersList.appendChild(listItem);
    });
  }
  
  function showChapter(chapterUrl) {
    // Display the content in a new window or tab
    const chapterWindow = window.open(chapterUrl, '_blank');
  }
  
  generateChaptersList(); // Generate the chapters list
  