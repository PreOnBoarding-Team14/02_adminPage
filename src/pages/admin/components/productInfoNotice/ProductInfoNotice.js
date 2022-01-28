import styled from 'styled-components';

export default function ProductInfoNotice() {
  return null;
}

const ConfigAlert = ({
  getFieldDecorator,
  isLoading,
  riskAttr,
  isAdmin,
  onChange,
  onSubmit,
  onCheckboxChange,
  checkboxState,
}) => {
  const inputList = Object.keys(riskAttr).reduce((acc, v) => {
    acc.push({
      label:
        v.charAt(0).toUpperCase() + v.substring(1, v.indexOf('Risk')) + ' Risk',
      name: v,
      initialValue: riskAttr[v],
      disabled: checkboxState[v] === 'Y' && isAdmin ? false : true,
      checkAttr: {
        label: '',
        value: '',
        name: `${v}Check`,
        initialValue: checkboxState[v] === 'Y' ? ['Y'] : [],
        className: `${v}`,
        typeValue: v,
        onCheckboxChange,
        list: [
          {
            value: checkboxState[v],
            name: '',
            disabled: isAdmin ? false : true,
          },
        ],
      },
    });
    return acc;
  }, []);
  return (
    <div className="limit">
      <ComponentTitle title="경고 임계값 설정" iconType="setting" />
      <div className="guide stand-info-mgmt-guide">
        <ul>
          <li>Risk 설정 단위는 비율(%)입니다.</li>
        </ul>
      </div>
      <div className="content">
        <Form onChange={onChange}>
          <>
            {inputList.map((v, i) => (
              <div className="risk-setting">
                <div className="risk-checkbox">
                  <FormCheckbox
                    key={i + 1}
                    getFieldDecorator={getFieldDecorator}
                    attr={v.checkAttr}
                  />
                </div>
                <div className="risk-input">
                  <FormInput
                    key={(i + 1) * 10}
                    getFieldDecorator={getFieldDecorator}
                    attr={FormUtil.getInputlValues(
                      v.label,
                      v.name,
                      v.initialValue,
                      'string',
                      'text',
                      null,
                      true,
                      v.disabled,
                      10,
                      '',
                      '설정할 Risk 값을 입력하세요.',
                      null,
                      ''
                    )}
                  />
                </div>
              </div>
            ))}
          </>
        </Form>
        <Button
          type="primary"
          loading={isLoading}
          onClick={() => onSubmit()}
          disabled={!isAdmin}
        >
          저장
        </Button>
      </div>
    </div>
  );
};
