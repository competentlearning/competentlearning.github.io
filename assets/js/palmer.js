$(document).ready(function() {
    var cities = [
        "Kota Bandung", "Kota Cimahi", "Kabupaten Bandung", "Kabupaten Bandung Barat", "Kota Jakarta Selatan", "Kota Jakarta Pusat", "Kota Jakarta Barat", "Kota Jakarta Timur", "Kota Jakarta Utara", "Kota Yogyakarta", "Kota Denpasar", "Kota Surabaya", "Kota Bekasi", "Kota Depok", "Kota Tangerang Selatan", "Kabupaten Banyumas", "Kabupaten Magelang", "Kabupaten Bekasi", "Kabupaten Karawang", "Kabupaten Bogor", "Kabupaten Tangerang", "Kabupaten Gresik", "Kabupaten Sukoharjo", "Kabupaten Jember", "Kabupaten Klaten", "Kabupaten Purworejo", "Kabupaten Kebumen", "Kabupaten Kendal", "Kabupaten Lamongan", "Kabupaten Madiun", "Kabupaten Pati", "Kabupaten Sragen", "Kabupaten Mojokerto", "Kota Semarang", "Kota Batu", "Kabupaten Trenggalek", "Kabupaten Nganjuk", "Kabupaten Bondowoso", "Kabupaten Sumenep", "Kabupaten Situbondo", "Kabupaten Pamekasan", "Kabupaten Sampang", "Kabupaten Bangkalan", "Kabupaten Tulungagung", "Kabupaten Malang", "Kota Medan", "Kota Makassar", "Kota Palembang", "Kota Balikpapan", "Kota Batam", "Kota Malang", "Kota Pekanbaru", "Kota Bandar Lampung", "Kota Solo", "Kota Bogor", "Kota Pontianak", "Kota Banjarmasin", "Kota Langsa", "Kota Sabang", "Kota Subulussalam", "Kabupaten Sleman", "Kabupaten Badung", "Kabupaten Gianyar", "Kabupaten Bantul", "Kabupaten Sidoarjo", "Kabupaten Karanganyar", "Kabupaten Kudus", "Kabupaten Blitar", "Kabupaten Tuban", "Kabupaten Pasuruan", "Kabupaten Ngawi", "Kabupaten Kediri", "Kabupaten Banyuwangi", "Kabupaten Probolinggo", "Kabupaten Jombang", "Kabupaten Bojonegoro", "Kabupaten Ponorogo", "Kabupaten Pacitan", "Kota Manado", "Kota Padang", "Kota Samarinda", "Kota Jambi", "Kota Kupang", "Kota Tanjung Pinang", "Kota Mataram", "Kota Kendari", "Kota Gorontalo", "Kota Ambon", "Kota Palu", "Kota Tarakan", "Kota Ternate", "Kota Lubuklinggau", "Kota Prabumulih", "Kota Pematangsiantar", "Kota Tebing Tinggi", "Kota Tanjungbalai", "Kota Padangsidimpuan", "Kota Sibolga", "Kota Binjai", "Kota Lhokseumawe", "Kota Cirebon", "Kota Sukabumi", "Kota Tasikmalaya", "Kota Banjar", "Kabupaten Ciamis", "Kabupaten Cianjur", "Kabupaten Cirebon", "Kabupaten Garut", "Kabupaten Indramayu", "Kabupaten Karawang", "Kabupaten Kuningan", "Kabupaten Majalengka", "Kabupaten Pangandaran", "Kabupaten Purwakarta", "Kabupaten Subang", "Kabupaten Sukabumi", "Kabupaten Sumedang", "Kabupaten Tasikmalaya"
    ];

    function displayCities(filteredCities) {
        var cityList = $("#list-kot");
        cityList.empty();
        if (filteredCities.length === 0) {
            cityList.append('<small><div class="alert alert-info" role="alert">Mohon maaf Kab/Kota anda belum terjangkau!</div></small>');
        } else {
            filteredCities.forEach(function(city) {
                cityList.append('<a class="btn btn-outline-primary super-small-button" disabled>' + city + '</a>');
            });
        }
    }

    $("#searchkota").on("keyup", function() {
        var keyword = $(this).val().toLowerCase();
        var filteredCities = cities.filter(function(city) {
            return city.toLowerCase().includes(keyword);
        });
        displayCities(filteredCities);
    });

    // Display all cities on initial load
    displayCities(cities);

    var itemsPerPage = 5;

    var foto_bimble = [
      "IMG-20201118-WA0032.jpg","IMG20210308084007.jpg","IMG20210308084049.jpg","IMG20210820111940.jpg","IMG20210820112022.jpg","IMG20211026083048.jpg","IMG20220306084936.jpg","IMG20220320081606.jpg","IMG20220626085332.jpg","IMG20220702092737.jpg","IMG20240704162606.jpg","IMG20240705141324.jpg","IMG20240705141347.jpg","IMG20240705141358.jpg","IMG20240705141415.jpg","IMG20240705141427.jpg","IMG20240705141433.jpg","IMG20240705141452.jpg","IMG20240705153628.jpg"
    ];

    var foto_private = [
        "IMG20240705153655.jpg",
        "IMG20240705153721.jpg",
        "IMG20240705153746.jpg",
        "IMG20240705153816.jpg",
        "IMG20240705153833.jpg",
        "IMG20240705154813.jpg",
        "IMG20240705163517.jpg",
        "IMG20240705163557.jpg",
        "IMG20240705163639.jpg",
        "IMG20240705163723.jpg",
        "IMG_20220626_150430.jpg",
        "IMG_20220626_150504.jpg",
        "IMG_20220626_150515.jpg",
        "IMG_20220626_150530.jpg",
        "IMG_20220706_063927.jpg",
        "IMG_20220706_063952.jpg",
        "IMG_20220706_064018.jpg",
        "IMG_20220706_064032.jpg",
        "IMG_20220706_064050.jpg",
        "IMG_20220706_064113.jpg",
        "IMG_20220706_064134.jpg",
        "IMG_20220706_064551.jpg",
        "IMG_20220706_064612.jpg",
        "IMG_20220706_064642.jpg",
    ];

    var all_photos = foto_bimble.concat(foto_private);

    function renderPhotos(photos, container) {
      container.empty();
      var toShow = photos.slice(0, itemsPerPage);
      toShow.forEach(function(photo) {
        var photoHTML = `
          <div class="col-lg-4 col-md-6 portfolio-item">
            <div class="portfolio-wrap">
              <img src="assets/img/foto/${photo}" class="img-fluid" alt="">
            </div>
          </div>
        `;
        container.append(photoHTML);
      });
    }

    function handleFilter(filter) {
      var photos;
      if (filter === '*') {
        photos = all_photos;
      } else if (filter === 'bimble') {
        photos = foto_bimble;
      } else if (filter === 'private') {
        photos = foto_private;
      }
      renderPhotos(photos, $('.list-foto'));
    }

    // Initialize with all photos
    handleFilter('*');

    $('#foto-filters li').on('click', function() {
      $('#foto-filters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      var filterValue = $(this).attr('data-filter');
      handleFilter(filterValue);
      $('#see-more').show();
    });

    $('#see-more').on('click', function() {
      var filterValue = $('#foto-filters .filter-active').attr('data-filter');
      var photos;
      if (filterValue === '*') {
        photos = all_photos;
      } else if (filterValue === 'bimble') {
        photos = foto_bimble;
      } else if (filterValue === 'private') {
        photos = foto_private;
      }

      var currentItems = $('.portfolio-item').length;
      var nextItems = photos.slice(currentItems, currentItems + itemsPerPage);
      nextItems.forEach(function(photo) {
        var photoHTML = `
          <div class="col-lg-4 col-md-6 portfolio-item">
            <div class="portfolio-wrap">
              <img src="assets/img/foto/${photo}" class="img-fluid" alt="">
            </div>
          </div>
        `;
        $('.list-foto').append(photoHTML);
      });

      if (currentItems + nextItems.length >= photos.length) {
        $('#see-more').hide();
      }
    });

    const lesData = {
        "paud": { name: "PAUD/TK", price: 80000 },
        "sd-1-5": { name: "SD Kelas 1-5", price: 85000 },
        "sd-6": { name: "SD Kelas 6", price: 90000 },
        "smp-7-8": { name: "SMP Kelas 7-8", price: 95000 },
        "smp-9": { name: "SMP Kelas 9", price: 100000 },
        "sma-10-11": { name: "SMA Kelas 10-11", price: 105000 },
        "sma-12": { name: "SMA Kelas 12", price: 110000 },
        "utbk": { name: "Persiapan UTBK / ujian mandiri", price: 120000 },
        "tni-polri": { name: "Persiapan Tes TNI/POLRI", price: 120000 },
        "cpns": { name: "Persiapan Tes CPNS", price: 120000 },
        "s1": { name: "Mata Kuliah Mahasiswa S1", price: 130000 },
        "toefl": { name: "TOEFL", price: 130000 },
        "ielts": { name: "IELTS", price: 140000 },
        "skripsi": { name: "Bimbingan Skripsi", price: 140000 },
        "kesenian": { name: "Kesenian", price: 100000 },
        "olahraga": { name: "Olahraga", price: 100000 }
      };
  
      const bbData = {
        "bb-paud": { name: "PAUD/TK", price: 130000 },
        "bb-sd-1-5": { name: "SD Kelas 1-5", price: 135000 },
        "bb-sd-6": { name: "SD Kelas 6", price: 140000 },
        "bb-smp-7-8": { name: "SMP Kelas 7-8", price: 145000 },
        "bb-smp-9": { name: "SMP Kelas 9", price: 150000 },
        "bb-sma-10-11": { name: "SMA Kelas 10-11", price: 155000 },
        "bb-sma-12": { name: "SMA Kelas 12", price: 160000 },
        "bb-utbk": { name: "Persiapan UTBK / ujian mandiri", price: 170000 },
        "bb-tni-polri": { name: "Persiapan Tes TNI/POLRI", price: 170000 },
        "bb-cpns": { name: "Persiapan Tes CPNS", price: 170000 },
        "bb-s1": { name: "Mata Kuliah Mahasiswa S1", price: 180000 },
        "bb-toefl": { name: "TOEFL", price: 180000 },
        "bb-ielts": { name: "IELTS", price: 190000 },
        "bb-skripsi": { name: "Bimbingan Skripsi", price: 190000 },
        "bb-kesenian": { name: "Kesenian", price: 150000 },
        "bb-olahraga": { name: "Olahraga", price: 150000 }
      };
  
      function renderInfo(data) {
        let htmlContent = "";
        for (let key in data) {
          htmlContent += `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${data[key].name}</h5>
                <p class="card-text">Harga: Rp ${data[key].price}/90 menit</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdyJ19Vz2COt_HIoLPGGCDQJeu5kU16dBLE2lfU9mshyOLZg/viewform" class="btn btn-outline-success">Daftar</a>
              </div>
            </div>
          `;
        }
        $('#infoContainer').html(htmlContent);
      }
  
      $('#categorySelect').on('change', function() {
        const selectedValue = $(this).val();
  
        if (selectedValue.startsWith('bb-')) {
          if (selectedValue === 'all-bb') {
            renderInfo(bbData);
          } else {
            renderInfo({ [selectedValue]: bbData[selectedValue] });
          }
        } else {
          if (selectedValue === 'all-les') {
            renderInfo(lesData);
          } else {
            renderInfo({ [selectedValue]: lesData[selectedValue] });
          }
        }
      });
});