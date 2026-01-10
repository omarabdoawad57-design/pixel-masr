const movies = [
  {
    id: 1,
    title: "Night of the Living Dead",
    type: "movie",
    rating: 8.1,
    image: "https://upload.wikimedia.org/wikipedia/en/7/76/Night_of_the_Living_Dead_%281968%29_poster.jpg",
    watch: "https://archive.org/embed/night_of_the_living_dead",
    views: Number(localStorage.getItem("v1")) || 1200
  },
  {
    id: 2,
    title: "Big Buck Bunny",
    type: "cartoon",
    rating: 8.0,
    image: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    watch: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    views: Number(localStorage.getItem("v2")) || 3000
  },
  {
    id: 3,
    title: "Sintel",
    type: "anime",
    rating: 8.3,
    image: "https://download.blender.org/durian/poster/sintel_poster.jpg",
    watch: "https://www.youtube.com/embed/eRsGyueVLvQ",
    views: Number(localStorage.getItem("v3")) || 4100
  }
];
