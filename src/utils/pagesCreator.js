export function createPages(pages, pagesCount, currentPage) {
  if(pagesCount > 9) {
      if(currentPage >= 3 && currentPage < pagesCount - 1) {
          for (let i = currentPage-2; i <= currentPage+2; i++) {
              pages.push(i)
              if(i == pagesCount) break
          }
      }
      else if(currentPage === pagesCount - 1) {
          for (let i = currentPage-3; i <= currentPage+4; i++) {
              pages.push(i)
              if(i == pagesCount) break
          }
      }
      else if(currentPage === pagesCount) {
          for (let i = currentPage-4; i <= currentPage+3; i++) {
              pages.push(i)
              if(i == pagesCount) break
          }
      }
      else {
          for (let i = 1; i <= 5; i++) {
              pages.push(i)
              if(i == pagesCount) break
          }
      }
  }  else {
      for (let i = 1; i <= pagesCount; i++) {
          pages.push(i)
      }
  }
}