// Script to toggle between English and German texts
      function toggleLanguage() {
        var heading = document.querySelector('.ImpressumHeading h1');
        var text = document.querySelector('.ImpressumText');
        var button = document.getElementById('toggleBtn');

        if (heading.textContent.includes('[EN]')) {
          // Switch to German
          heading.textContent = 'Impressum: [DE]';
          text.innerHTML = `
            Meltdown Legion Holding GmbH<br/>
            Musterstraße 1,<br/>
            DE 10555, Musterstadt, Deutschland<br/>
            https://hsnr-asirbegovic.pages.ide3.de/3.semester/web/praktikum/<br/>
            Eingetragen beim Amtsgericht Musterstadt, HRB 934702 B<br/><br/>
            USt-ID-Nr. DE718676553<br/><br/>
            Geschäftsführer:<br/>
            Max Mustermann<br/><br/>
            Inhaltlich Verantwortlicher gemäß §18 Abs. 2 RStV:<br/>
            Marlene Musterfrau<br/>
            Musterstraße 3,<br/>
            DE 10555, Musterstadt, Deutschland<br/><br/>
            E-Mail: info@meltdownlegion.com
          `;
          button.textContent = 'Switch to English';
        } else {
          // Switch to English
          heading.textContent = 'Legal Notice: [EN]';
          text.innerHTML = `
            Meltdown Legion Holding GmbH<br/>
            Musterstraße 1,<br/>
            DE 10555, Musterstadt Germany<br/>
            https://hsnr-asirbegovic.pages.ide3.de/3.semester/web/praktikum/<br/>
            Registered at District Court Musterstadt, HRB 934702 B<br/><br/>
            VAT DE718676553<br/><br/>
            Managing Directors:<br/>
            Max Mustermann<br/><br/>
            Editorial responsibility according to §18 Abs. 2 RStV:<br/>
            Marlene Musterfrau<br/>
            Musterstraße 3,<br/>
            DE 10555, Musterstadt Germany<br/><br/>
            E-Mail: info@meltdownlegion.com
          `;
          button.textContent = 'Wechseln zu Deutsch';
        }
      }