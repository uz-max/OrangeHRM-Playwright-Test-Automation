
import { test as baseTest } from "../fixtures/pom-fixtures";
import CommonUtils from "../utils/CommonUtils";

type CommonFixtureType = {
    commonUtils: CommonUtils;
}

export const test = baseTest.extend<CommonFixtureType>({
    commonUtils: async({page}, use) => {
        await use(new CommonUtils());
    }
})