// প্রতিটি বাটনের জন্য ক্লিক ইভেন্ট যুক্ত করা
const buttons = document.querySelectorAll('.btn');

for (const button of buttons) {
  button.addEventListener('click', () => {
    console.log(`বাটন ${button.id} ক্লিক হয়েছে!`);
    // প্রতিটি বাটনের জন্য কাজ করুন

    // বাটন ক্লিক হলে ইভেন্ট লিসেনারটি সরানো
    button.removeEventListener('click', handleClick);
  });
}
