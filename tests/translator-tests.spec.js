const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

const TEST_DATA = {
  positive: [
        {
          tcId: 'Pos_Fun_001',
          name: 'Simple daily sentence',
          input: 'mama gedhara yanavaa',
          expected: 'මම ගෙදර යනවා',
          category: 'Daily language usage',
          grammar: 'Simple sentence',
          length: 'S'
        },
        {
            tcId: 'Pos_Fun_002',
            name: 'Interrogative sentence',
            input: 'oyaata kohomadha',
            expected: 'ඔයාට කොහොමද',
            category: 'Greeting / request/ response',
            grammar: 'Interrogative form',
            length: 'S'
        },

        {
        tcId: 'Pos_Fun_003',
        name: 'Mixed Singlish and English sentence',
        input: 'adha thiyena online panthiyee zoom link eka evanna puluvandha oyaata',
        expected: 'අද තියෙන online පන්තියේ zoom link එක එවන්න පුලුවන්ද ඔයාට',
        category: 'Mixed Singlish + English',
        grammar: 'Interrogative form',
        length: 'M'
        },
    
        {
        tcId: 'Pos_Fun_004',
        name: 'Slang and informal phrasing',
        input: 'ela machan supirii',
        expected: 'එල මචන් සුපිරී',
        category: 'Informal language usage',
        grammar: 'Simple sentence',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_005',
        name: 'Polite request sentence',
        input: 'anivaren maage potha heta geenna puluvandha',
        expected: 'අනිවරෙන් මාගෙ පොත හෙට ගේන්න පුලුවන්ද',
        category: 'Greeting / request/ response',
        grammar: 'Interrogative Form',
        length: 'M'
        },
    
        {
        tcId: 'Pos_Fun_006',
        name: 'Imperative command sentence',
        input: 'vahaama enna',
        expected: 'වහාම එන්න',
        category: 'Daily language usage',
        grammar: 'Command sentence',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_007',
        name: 'Negative sentences',
        input: 'mama ehema karanne naehae',
        expected: 'මම එහෙම කරන්නේ නැහැ',
        category: 'Daily language usage',
        grammar: 'Negative Form',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_008',
        name: 'Simple request sentence',
        input: 'mata udhavvak karanna puluvandha',
        expected: 'මට උදව්වක් කරන්න පුලුවන්ද',
        category: 'Greeting / request/ response',
        grammar: 'Interrogative (question)',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_009',
        name: 'Past tense sentence',
        input: 'mama iiye gedhara giyaa',
        expected: 'මම ඊයෙ ගෙදර ගියා',
        category: 'Daily language used ',
        grammar: ' Past tense',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_010',
        name: 'Convert plural pronoun sentence',
        input: 'api yamu',
        expected: 'අපි යමු',
        category: 'Daily language usage',
        grammar: 'Plural form',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_011',
        name: 'Future tense sentence',
        input: 'api heta panthi yamu',
        expected: 'අපි හෙට පන්ති යමු',
        category: 'Daily language usage ',
        grammar: 'Future tense',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_012',
        name: 'Plural pronoun sentence',
        input: 'oyaalaa heta pansal yanavadha',
        expected: 'ඔයාලා හෙට පන්සල් යනවද',
        category: 'Daily language usage',
        grammar: 'Plural variation',
        length: 'S'
        },
        {
        tcId: 'Pos_Fun_013',
        name: 'Sentence with extra spaces',
        input: 'mama gedhara innee',
        expected: 'මම ගෙදර ඉන්නේ',
        category: 'Formatting',
        length: 'S'
        },
    
        {
        tcId: 'Pos_Fun_014',
        name: 'Past tense action',
        input: 'mama iiyee gedhara giyaa',
        expected: 'මම ඊයේ ගෙදර ගියා',
        category: 'Daily language usage',
        grammar: 'Past tense',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_015',
        name: 'Plural pronoun sentence',
        input: 'oyalaa heta yanavadha',
        expected: 'ඔයලා හෙට යනවද',
        category: 'Daily language usage',
        grammar: 'Simple sentence',
        length: 'S'
        },
    
        {
        tcId: 'Pos_Fun_016',
        name: 'Common greeting',
        input: 'aayuboovan',
        expected: 'ආයුබෝවන්',
        category: 'Greething / request/ response',
        grammar: 'Simple sentence',
        length: 'S'
        },

        {
        tcId: 'Pos_Fun_017',
        name: 'Present tense daily activity',
        input: 'mama dhaen bath kanavaa',
        expected: 'මම දැන් බත් කනවා',
        category: 'Daily language usage',
        grammar: 'Present Tense',
        length: 'S'
        },
    
        {
        tcId: 'Pos_Fun_018',
        name: 'Readable joined-word sentence',
        input: 'oyaalaa heta yanavaa kiyala eyaa mata kivvaa',
        expected: 'ඔයාලා හෙට යනවා කියල එයා මට කිව්වා',
        category: 'Daily language usage',
        grammar: 'Simple sentences',
        length: 'M'
        },
  
        {
        tcId: 'Pos_Fun_019',
        name: 'Sentence with place names',
        input: 'api nuvara yanna hadhanne heta',
        expected: 'අපි නුවර යන්න හදන්නෙ හෙට',
        category: 'Names/places/common english words',
        grammar: 'Future Tense',
        length: 'M'
        },
    
        {
        tcId: 'Pos_Fun_020',
        name: 'polite instruction sentence',
        input: 'oyaata puluvan nam karunaakaralaa eeka poddak balanna',
        expected: 'ඔයාට පුලුවන් නම් කරුනාකරලා ඒක පොඩ්ඩක් බලන්න',
        category: 'Greeting / request/ response',
        grammar: 'Command',
        length: 'M'
        },

        {
        tcId: 'Pos_Fun_021',
        name: 'Simple daily activity sentence',
        input: 'api paasal yanavaa',
        expected: 'අපි පාසල් යනවා',
        category: 'Daily language usage',
        grammar: 'Simple sentence',
        length: 'S'
        },
    
        {
        tcId: 'Pos_Fun_022',
        name: 'Compound sentence',
        input: 'api kaeema kanna yanavaa saha passe chithrapatiyak balanavaa',
        expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටියක් බලනවා',
        category: 'Daily language usage',
        grammar: 'Compound sentence',
        length: 'M'
        },
    
        {
        tcId: 'Pos_Fun_023',
        name: 'Currency amount',
        input: 'eeyi ooka dhenna',
        expected: 'ඒයි ඕක දෙන්න',
        category: 'Informal language',
        grammar: 'Command',
        length: 'S'
        },
    
        {
        tcId: 'Pos_Fun_024',
        name: 'Clean negative sentence',
        input: 'eeka mata epaa',
        expected: 'ඒක මට එපා',
        category: 'Daily language usage',
        grammar: 'Negative form',
        length: 'S'
        }
  ],  
  
    negative: [
        {
        tcId: 'Neg_Fun_001',
        name: 'Conversion with long messy Singlish input',
        input: 'adha class eka online widihata thiyenavaa kiyalaa sir kiwwa ehema nisaa api kalinma ready wenna hithuwa mama laptop eka on karalaa wifi connect karagaththa passe meetinglinkeka email inbox eke thiyenavaadha kiyalaa hoya hoya inne meeting eka 8.00AM patan gannavaa kiyalaa kiwwoth api okkoma welavata login wenna trykaranavaa namuth network slow wunoth lesson eka hariyata follow karaganna amaarui kiyalaa hithenavaa',
        expected: 'adha class eka online widihata thiyenavaa kiyalaa sir kiwwa ehema nisaa api kalinma ready wenna hithuwa mama laptop eka on karalaa wifi connect karagaththa passe meetinglinkeka email inbox eke thiyenavaadha kiyalaa hoya hoya inne meeting eka 8.00AM patan gannavaa kiyalaa kiwwoth api okkoma welavata login wenna trykaranavaa namuth network slow wunoth lesson eka hariyata follow karaganna amaarui kiyalaa hithenavaa',
        category: 'Formatting (spaces / line breaks / paragraph)',
        grammar: 'Compound sentence',
        length: 'L'
        },
        {
        tcId: 'Neg_Fun_002',
        name: 'conversion due to joined words',
        input: 'matabathoone',
        expected: 'මට බත් ඕනෙ',
        category: 'Typographical error handling',
        grammar: 'Simple sentence',
        length: 'S'
        },
        {
        tcId: 'Neg_Fun_003',
        name: 'handling of punctuation-heavy input',
        input: 'oyaatakohomadha..!!!!????',
        expected: 'ඔයාට කොහොමද..!!!!????',
        category: 'Punctuation',
        grammar: 'Simple sentence',
        length: 'S'
        },
        {
        tcId: 'Neg_Fun_004',
        name: 'Incorrect conversion due to joined words',
        input: 'mamageDharayanavaa.@',
        expected: 'මම ගෙධර යනවා.@',
        category: 'Typographical error handling ',
        grammar: 'Simple sentence',
        length: 'S'
        },

        {
        tcId: 'Neg_Fun_005',
        name: 'Incorrect handling of special symbols',
        input: 'mamagedharayanavaa@@',
        expected: 'මම ගෙදර යනවා@@',
        category: 'Punctuation',
        grammar: 'Simple sentence',
        length: 'S'
        },
        {
        tcId: 'Neg_Fun_006',
        name: 'Incorrect conversion with excessive punctuation',
        input: 'oyaata!!!!kohomadha??? adha',
        expected: 'ඔයාට!!!! කොහොමද??? අද',
        category: 'Punctuation',
        grammar: 'Interrogative (question)',
        length: 'S'
        },
        {
        tcId: 'Neg_Fun_007',
        name: 'Incorrect conversion with inconsistent letter casing',
        input: 'MaMa GeDhArAYaNaVaA',
        expected: 'මම ඟෙධර YඅණVඅඅ',
        category: 'Typographical error handling',
        grammar: 'Simple sentence',
        length: 'S'
        },
        {
        tcId: 'Neg_Fun_008',
        name: 'Abbreviation in sentence',
        input: 'mama iiyee gedhara yanavaa saha heta giyaa.',
        expected: 'මම ඊයේ ගෙදර යනවා සහ හෙට ගියා',
        category: 'Daily language usage',
        grammar: 'Compound sentence',
        length: 'M'
        },
        {
        tcId: 'Neg_Fun_009',
        name: 'Incorrect conversion with long mixed-issue Singlish paragraph',
        input: 'adha apita online class eka thiyenavaa kiyalaa teacher kiwwa ehema nisaa mama kalinma laptop eka on karalaa charge  karagaththa passe meetinglink eka group eke thiyenavaadha kiyalaa hoyalaa inne meeting eka 6.00PM patangannavaa nisaa api okkoma welavata ready wenna oone namuth net ek slow wunoth welawat lesson ekat yanna bari wena nisa kalin log wela imu',
        expected: 'adha apita online class eka thiyenavaa kiyalaa teacher kiwwa ehema nisaa mama kalinma laptop eka on karalaa charge  karagaththa passe meetinglink eka group eke thiyenavaadha kiyalaa hoyalaa inne meeting eka 6.00PM patangannavaa nisaa api okkoma welavata ready wenna oone namuth net ek slow wunoth welawat lesson ekat yanna bari wena nisa kalin log wela imu',
        category: 'Formatting ',
        grammar: 'Compound Sentence',
        length: 'L'
        },
        {
        tcId: 'Neg_Fun_010',
        name: 'Incorrect handling of English abbreviations',
        input: 'adha api ID NIC check karala office yanna oone',
        expected: 'අද අපි ID NIC check කරල office යන්න ගියා',
        category: 'adha api ID NIC check karala office yanna oone',
        grammar: 'Simple sentence',
        length: 'M'
        }
    ],
      ui: {
        tcId: 'Pos_UI_001',
        name: 'Real-time translation updates while typing a simple sentence',
        input: 'api gedhara yanavaa',
        partialInput: 'api ged',
        expectedFull: 'අපි ගෙදර යනවා',
        category: 'Daily language used ',
        grammar: 'Present tense',
        length: 'S'
      }
}

class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

   // Negative Functional Tests
    test.describe('Negative Functional Tests', () => {
      for (const testCase of TEST_DATA.negative) {
        test(`${testCase.tcId} - ${testCase.name}`, async () => {
          const actualOutput = await translator.performTranslation(testCase.input);
          expect(actualOutput).toBe(testCase.expected);
          await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
        });
      }
    });

    // Ui Tests
    test.describe('UI Functionality Tests', () => {
          test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
            const translator = new TranslatorPage(page);
            const input = await translator.getInputField();
            const output = await translator.getOutputField();
      
            await translator.clearAndWait();
            
            // Type partial input
            await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
            
            // Wait for partial output
            await page.waitForTimeout(1500);
            
            // Verify partial translation appears
            let outputText = await output.textContent();
            expect(outputText.trim().length).toBeGreaterThan(0);
            
            // Complete typing
            await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
            
            // Wait for full translation
            await translator.waitForOutput();
            
            // Verify full translation
            outputText = await translator.getOutputText();
            expect(outputText).toBe(TEST_DATA.ui.expectedFull);
            
            await page.waitForTimeout(CONFIG.timeouts.betweenTests);
        });
    });
});
